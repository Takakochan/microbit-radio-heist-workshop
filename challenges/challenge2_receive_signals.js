/**
 * ========================================
 * CHALLENGE 2: RECEIVING RADIO SIGNALS
 * ========================================
 * 
 * IMPORTANT: The Matrix is currently broadcasting
 * a number on group 1.
 * 
 * YOUR MISSION:
 * Prove that your micro:bit can receive the number.
 * When you receive a signal, display your Agent-ID
 * (from Challenge 1) followed by the received number.
 * 
 * BLOCKS TO USE:
 *   - set group
 *   - on received number
 *   - show icon
 * 
 * TIP: You can drag the variable into other blocks!
 * 
 * ========================================
 */

// TODO: Set your radio group to 1 (The Matrix broadcasts on group 1)
// This must go in "on start" — not inside any event!
radio.setGroup(1)

// TODO: When a number is received, show your Agent-ID
// then show the received number
radio.onReceivedNumber(function (receivedNumber) {
    // TODO: Show your Agent-ID icon

    // TODO: Pause

    // TODO: Show the received number (use the receivedNumber variable!)

    // TODO: Pause

    // TODO: Clear screen

})

// OPTIONAL EXTRA TASK — Silent Listener:
// Only show the icon if the received number is greater than 10.
// This builds your first filter!
//
// HINT: Use an "if" block:
// if (receivedNumber > 10) {
//     // show icon + number
// }
