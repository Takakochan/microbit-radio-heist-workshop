/**
 * ========================================
 * TREASURE BEACON
 * ========================================
 * 
 * FOR TEACHERS / FACILITATORS ONLY
 * Flash this onto a micro:bit and HIDE IT
 * somewhere in the room for Challenge 5.
 * 
 * WHAT THIS DOES:
 *   - Continuously sends a number on group 1
 *   - Students use RSSI signal strength to
 *     find it (hot/cold radar)
 * 
 * TIPS:
 *   - Hide it in a backpack, drawer, or behind
 *     a monitor
 *   - Make sure it has a battery pack attached
 *   - The signal goes through walls and bags
 *   - Test the range before hiding it!
 * 
 * ========================================
 */

// Set radio group (must match student's Challenge 5 code!)
radio.setGroup(1)

// Set transmit power (0-7, higher = longer range)
// Use 4-5 for a medium-sized room
// Use 1-2 if you want students to have to get very close
radio.setTransmitPower(4)

// Continuously send a beacon signal
basic.forever(function () {
    // Send a number (the actual number doesn't matter,
    // students use the signal STRENGTH, not the value)
    radio.sendNumber(1)

    // Small LED indicator so you know it's working
    // (cover with tape if you don't want students to see the glow)
    led.toggle(2, 2)

    // Send every 200ms for smooth RSSI readings
    basic.pause(200)
})
