/**
 * ========================================
 * CHALLENGE 5: FIND THE TREASURE
 * ========================================
 * 
 * Build a Hot/Cold radar!
 * The stronger the signal, the closer you are.
 * 
 * Use the provided code below — load it onto
 * your micro:bit and start hunting!
 * 
 * HOW IT WORKS:
 *   - RSSI = signal strength (negative number)
 *   - Closer = stronger signal = higher RSSI
 *   - -40 is CLOSE, -80 is FAR
 *   - Think of it like WiFi bars on your phone!
 * 
 * ========================================
 */

// Set the radio group (must match the treasure beacon!)
radio.setGroup(1)

// Variable to store signal strength
let signalStrength = 0

// When we receive a number, check how strong the signal is
radio.onReceivedNumber(function (receivedNumber) {
    // Get the signal strength (RSSI)
    signalStrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)

    // Clear the screen first
    basic.clearScreen()

    // Map signal strength to LED bars
    // RSSI typically ranges from about -42 (very close) to -128 (far away)
    if (signalStrength > -45) {
        // VERY CLOSE — all 5 bars!
        led.plotBarGraph(5, 5)
        // Play a high-pitched beep (micro:bit v2 only)
        music.playTone(988, music.beat(BeatFraction.Eighth))
    } else if (signalStrength > -55) {
        // Close — 4 bars
        led.plotBarGraph(4, 5)
        music.playTone(784, music.beat(BeatFraction.Eighth))
    } else if (signalStrength > -65) {
        // Getting warmer — 3 bars
        led.plotBarGraph(3, 5)
        music.playTone(523, music.beat(BeatFraction.Eighth))
    } else if (signalStrength > -75) {
        // Far — 2 bars
        led.plotBarGraph(2, 5)
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (signalStrength > -85) {
        // Very far — 1 bar
        led.plotBarGraph(1, 5)
        music.playTone(262, music.beat(BeatFraction.Half))
    } else {
        // Out of range — show question mark
        basic.showString("?")
    }
})

// Show the actual RSSI number when you press button A
// (useful for debugging and understanding the values)
input.onButtonPressed(Button.A, function () {
    basic.showNumber(signalStrength)
})
