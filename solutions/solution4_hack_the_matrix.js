/**
 * ========================================
 * SOLUTION 4: HACKING THE MATRIX
 * ========================================
 * Uses a for-loop to brute-force the secret key.
 * When The Matrix responds, displays the clue.
 * 
 * IMPORTANT: Change MY_GROUP to your actual
 * group number!
 * ========================================
 */

// *** CHANGE THIS to your group number! ***
const MY_GROUP = 5

// Set radio group
radio.setGroup(MY_GROUP)

// Button A — start brute-force attack!
input.onButtonPressed(Button.A, function () {
    // Show a "hacking" animation
    basic.showString(">>")

    // Try every number from 0 to 100
    for (let index = 0; index <= 100; index++) {
        // Send the current number to The Matrix
        radio.sendNumber(index)

        // Show which number we're trying
        basic.showNumber(index)

        // IMPORTANT: pause between sends!
        // Without this, the micro:bit sends too fast
        // and misses The Matrix's response
        basic.pause(500)
    }

    // Done trying — show "end"
    basic.showString("END")
    basic.clearScreen()
})

// When The Matrix responds with a string — that's the clue!
radio.onReceivedString(function (receivedString) {
    // Show the response (the treasure clue!)
    basic.showString(receivedString)
    basic.pause(2000)
    basic.clearScreen()
})
