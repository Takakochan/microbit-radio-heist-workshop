/**
 * ========================================
 * SOLUTION 2: RECEIVING RADIO SIGNALS
 * ========================================
 * Receives a number from The Matrix on group 1,
 * displays Agent-ID followed by the number.
 * ========================================
 */

// Set radio group to 1 (The Matrix broadcasts here)
radio.setGroup(1)

// When a number is received from The Matrix
radio.onReceivedNumber(function (receivedNumber) {
    // Show Agent-ID first
    basic.showIcon(IconNames.Skull)
    basic.pause(500)
    // Then show the received number
    basic.showNumber(receivedNumber)
    basic.pause(1000)
    basic.clearScreen()
})

// OPTIONAL: Silent Listener — only show if number > 10
// radio.onReceivedNumber(function (receivedNumber) {
//     if (receivedNumber > 10) {
//         basic.showIcon(IconNames.Skull)
//         basic.pause(500)
//         basic.showNumber(receivedNumber)
//         basic.pause(1000)
//         basic.clearScreen()
//     }
// })
