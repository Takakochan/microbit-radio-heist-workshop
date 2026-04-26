/**
 * ========================================
 * CHALLENGE 3: TEAM SEARCH
 * (Sending and Receiving Signals)
 * ========================================
 * 
 * To find each other, you will need to SEND
 * signals in addition to receiving them.
 * 
 * Walk around and test signals until you find
 * your team partner!
 * 
 * YOUR MISSION:
 * Build a system that:
 *   1. Sends your group number when you press a button
 *   2. Shows your Agent-ID + received number when
 *      you receive a signal from a team member
 * 
 * BLOCKS TO USE:
 *   - set group (use YOUR group number!)
 *   - on button pressed
 *   - send number
 *   - on received number
 *   - show icon / show number
 *   - clearScreen / pause
 * 
 * ========================================
 */

// TODO: Set your radio group to YOUR group number (from the envelope!)
// IMPORTANT: Change this from 1 to your own number!
radio.setGroup(1) // <-- CHANGE THIS to your group number!

// TODO: When button A is pressed, send your group number
input.onButtonPressed(Button.A, function () {
    // TODO: Send your group number using radio.sendNumber()

})

// TODO: When a number is received, show your Agent-ID + the number
radio.onReceivedNumber(function (receivedNumber) {
    // TODO: Show your Agent-ID icon

    // TODO: Pause

    // TODO: Show the received number

    // TODO: Pause

    // TODO: Clear screen

})

// OPTIONAL EXTRA TASK — Handshake Protocol:
// When you receive a number, send "ACK" (Acknowledged) back.
// When you receive "ACK", show a checkmark.
// This is how real networks confirm that communication works!
//
// radio.onReceivedString(function (receivedString) {
//     if (receivedString == "ACK") {
//         // TODO: Show checkmark icon
//     }
// })
