"""
Invoice data models for the invoice generator.
"""
from dataclasses import dataclass
from datetime import date
from typing import List, Optional
from decimal import Decimal


@dataclass
class Customer:
    """Customer information."""
    name: str
    contact_name: str = ""  # Person's name for email greeting
    email: str = ""
    address: str = ""
    city: str = ""
    state: str = ""
    zip_code: str = ""
    country: str = ""
    phone: str = ""
    btw: str = ""  # BTW/VAT number

    def get_full_address(self) -> str:
        """Get formatted full address."""
        parts = [self.address, self.city, self.state, self.zip_code, self.country]
        return ", ".join([p for p in parts if p])


@dataclass
class InvoiceItem:
    """Single item on an invoice."""
    description: str
    quantity: Decimal
    unit_price: Decimal
    unit: str = "pcs"
    tax_rate: Optional[Decimal] = None  # If None, use invoice tax_rate
    currency: Optional[str] = None  # If None, use invoice currency
    currency_symbol: Optional[str] = None  # If None, use invoice currency_symbol

    @property
    def subtotal(self) -> Decimal:
        """Calculate subtotal for this item."""
        return self.quantity * self.unit_price

    def get_currency_symbol(self, fallback_symbol: str = "$") -> str:
        """Get currency symbol for this item."""
        return self.currency_symbol if self.currency_symbol else fallback_symbol

    def format_currency(self, amount: Decimal, fallback_symbol: str = "$") -> str:
        """Format amount with currency symbol."""
        symbol = self.get_currency_symbol(fallback_symbol)
        return f"{symbol}{amount:,.2f}"

    def to_dict(self) -> dict:
        """Convert to dictionary."""
        return {
            'description': self.description,
            'quantity': float(self.quantity),
            'unit': self.unit,
            'unit_price': float(self.unit_price),
            'subtotal': float(self.subtotal),
            'currency': self.currency,
            'currency_symbol': self.currency_symbol
        }


@dataclass
class Invoice:
    """Complete invoice with all details."""
    invoice_number: str
    customer: Customer
    items: List[InvoiceItem]
    issue_date: date
    due_date: date
    currency: str = "USD"
    currency_symbol: str = "$"
    tax_rate: Decimal = Decimal("0.10")
    tax_label: str = ""  # e.g., "BTW 21%", "BTW vrijgesteld", etc.
    notes: str = ""
    payment_terms: str = "Net 30"
    description: str = ""  # Invoice description/purpose

    # Custom details table (optional)
    details_table: Optional[List[List[str]]] = None  # List of rows, first row is headers

    # Travel receipt (optional)
    travel_receipt_file: Optional[str] = None  # Filename of the travel receipt PDF in Google Drive

    # Company info (will be loaded from config)
    company_name: str = ""
    company_address: str = ""
    company_phone: str = ""
    company_email: str = ""
    company_website: str = ""

    @property
    def subtotal(self) -> Decimal:
        """Calculate subtotal (sum of all items before tax)."""
        return sum(item.subtotal for item in self.items)

    @property
    def tax_amount(self) -> Decimal:
        """Calculate total tax amount (supports per-item tax rates)."""
        total_tax = Decimal("0")
        for item in self.items:
            # Use item tax_rate if specified, otherwise use invoice tax_rate
            item_tax_rate = item.tax_rate if item.tax_rate is not None else self.tax_rate
            total_tax += item.subtotal * item_tax_rate
        return total_tax

    @property
    def total(self) -> Decimal:
        """Calculate total (subtotal + tax)."""
        return self.subtotal + self.tax_amount

    def get_tax_breakdown(self) -> dict:
        """Get tax breakdown by rate for display."""
        tax_by_rate = {}
        for item in self.items:
            item_tax_rate = item.tax_rate if item.tax_rate is not None else self.tax_rate
            rate_key = float(item_tax_rate)
            if rate_key not in tax_by_rate:
                tax_by_rate[rate_key] = {
                    'subtotal': Decimal("0"),
                    'tax': Decimal("0")
                }
            tax_by_rate[rate_key]['subtotal'] += item.subtotal
            tax_by_rate[rate_key]['tax'] += item.subtotal * item_tax_rate
        return tax_by_rate

    def get_items_by_currency(self) -> dict:
        """
        Group items by currency.

        Returns:
            Dict with currency code as key and dict containing:
            - 'symbol': currency symbol
            - 'items': list of items in that currency
            - 'subtotal': subtotal for that currency
            - 'tax': tax amount for that currency
            - 'total': total for that currency
        """
        from collections import defaultdict

        currency_groups = defaultdict(lambda: {
            'symbol': '',
            'items': [],
            'subtotal': Decimal("0"),
            'tax': Decimal("0"),
            'total': Decimal("0")
        })

        for item in self.items:
            # Use item currency if specified, otherwise use invoice currency
            item_currency = item.currency if item.currency else self.currency
            item_symbol = item.currency_symbol if item.currency_symbol else self.currency_symbol

            # Add item to its currency group
            currency_groups[item_currency]['symbol'] = item_symbol
            currency_groups[item_currency]['items'].append(item)
            currency_groups[item_currency]['subtotal'] += item.subtotal

            # Calculate tax for this item
            item_tax_rate = item.tax_rate if item.tax_rate is not None else self.tax_rate
            item_tax = item.subtotal * item_tax_rate
            currency_groups[item_currency]['tax'] += item_tax
            currency_groups[item_currency]['total'] += item.subtotal + item_tax

        return dict(currency_groups)

    def format_currency(self, amount: Decimal) -> str:
        """Format amount with currency symbol."""
        return f"{self.currency_symbol}{amount:,.2f}"

    def to_dict(self) -> dict:
        """Convert to dictionary."""
        return {
            'invoice_number': self.invoice_number,
            'customer': {
                'name': self.customer.name,
                'email': self.customer.email,
                'address': self.customer.get_full_address()
            },
            'items': [item.to_dict() for item in self.items],
            'issue_date': self.issue_date.isoformat(),
            'due_date': self.due_date.isoformat(),
            'currency': self.currency,
            'subtotal': float(self.subtotal),
            'tax_rate': float(self.tax_rate),
            'tax_amount': float(self.tax_amount),
            'total': float(self.total),
            'notes': self.notes,
            'payment_terms': self.payment_terms
        }


class InvoiceNumberGenerator:
    """Generate sequential invoice numbers."""

    def __init__(self, prefix: str = "INV", start_number: int = 1000,
                 counter_file: str = "config/invoice_counter.txt"):
        self.prefix = prefix
        self.start_number = start_number
        self.counter_file = counter_file

    def get_next_number(self) -> str:
        """Get the next invoice number."""
        try:
            with open(self.counter_file, 'r') as f:
                current = int(f.read().strip())
        except FileNotFoundError:
            current = self.start_number

        # Increment and save
        next_number = current + 1
        with open(self.counter_file, 'w') as f:
            f.write(str(next_number))

        return f"{self.prefix}-{next_number:05d}"

    def get_current_number(self) -> str:
        """Get the current invoice number without incrementing."""
        try:
            with open(self.counter_file, 'r') as f:
                current = int(f.read().strip())
        except FileNotFoundError:
            current = self.start_number

        return f"{self.prefix}-{current:05d}"
