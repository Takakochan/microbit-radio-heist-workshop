/**
 * ========================================
 * SOLUTION 3: TEAM SEARCH
 * ========================================
 * Sends and receives group number to find
 * your team partner.
 * 
 * IMPORTANT: Change MY_GROUP to your actual
 * group number from the envelope!
 * ========================================
 */

// *** CHANGE THIS to your group number! ***
const MY_GROUP = 5

// Set radio group to your own group number
radio.setGroup(MY_GROUP)

// Button A — send your group number
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(MY_GROUP)
    // Brief flash to confirm you sent something
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
    basic.clearScreen()
})

// When a number is received — show Agent-ID + the number
radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Skull)
    basic.pause(500)
    basic.showNumber(receivedNumber)
    basic.pause(1000)
    basic.clearScreen()
})

// OPTIONAL: Handshake Protocol
// When you receive a number, send "ACK" back
// radio.onReceivedNumber(function (receivedNumber) {
//     basic.showIcon(IconNames.Skull)
//     basic.pause(500)
//     basic.showNumber(receivedNumber)
//     basic.pause(500)
//     radio.sendString("ACK")
//     basic.clearScreen()
// })
//
// When you receive "ACK", show a checkmark
// radio.onReceivedString(function (receivedString) {
//     if (receivedString == "ACK") {
//         basic.showIcon(IconNames.Yes)
//         basic.pause(1000)
//         basic.clearScreen()
//     }
// })
