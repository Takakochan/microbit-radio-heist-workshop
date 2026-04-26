/**
 * ========================================
 * SOLUTION 5: FIND THE TREASURE
 * ========================================
 * Hot/Cold radar using RSSI signal strength.
 * This is the same as the challenge file —
 * the code is provided as a blueprint.
 * 
 * HOW RSSI WORKS:
 *   -40  = very close (strong signal)
 *   -60  = medium distance
 *   -80  = far away (weak signal)
 *   -100 = very far / out of range
 * 
 * Think of it like WiFi bars on your phone!
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

    // Map signal strength to LED bars and sound
    if (signalStrength > -45) {
        // VERY CLOSE — all 5 bars + high beep
        led.plotBarGraph(5, 5)
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
        // Out of range
        basic.showString("?")
    }
})

// Button A — show the raw RSSI value (for debugging)
input.onButtonPressed(Button.A, function () {
    basic.showNumber(signalStrength)
})
