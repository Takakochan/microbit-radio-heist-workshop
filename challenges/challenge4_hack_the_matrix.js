/**
 * ========================================
 * CHALLENGE 4: HACKING THE MATRIX
 * ========================================
 * 
 * The Matrix hears everything. It listens to
 * everything you send, but it only responds
 * to a SPECIFIC number (the key).
 * 
 * Can you figure it out?
 * 
 * YOUR MISSION:
 * Use a for-loop to systematically try all
 * numbers until The Matrix responds.
 * This is called "brute force"!
 * 
 * BLOCKS TO USE:
 *   - set group (your group number)
 *   - for loop
 *   - sendNumber (to test The Matrix)
 *   - on received string (Matrix response)
 *   - showString (to see the response)
 *   - clearScreen / pause
 *   - Variables (index)
 * 
 * TIP: The index must start at 0!
 * 
 * ========================================
 */

// TODO: Set your radio group to YOUR group number
radio.setGroup(1) // <-- CHANGE THIS to your group number!

// TODO: When button A is pressed, start brute-forcing!
// Use a for-loop to try numbers from 0 to 100
input.onButtonPressed(Button.A, function () {
    // TODO: Create a for-loop
    // for (let index = 0; index <= 100; index++) {
    //     TODO: Send the current index number
    //
    //     TODO: Add a pause (important! otherwise it's too fast)
    //
    // }
})

// TODO: When The Matrix responds with a string, display it!
// IMPORTANT: The Matrix sends back a STRING, not a number!
radio.onReceivedString(function (receivedString) {
    // TODO: Show the received string

    // TODO: Pause (long enough to read it!)

    // TODO: Clear screen

})
