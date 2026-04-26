/**
 * ========================================
 * THE MATRIX — Server Program
 * ========================================
 * 
 * FOR TEACHERS / FACILITATORS ONLY
 * Flash this onto the teacher's micro:bit
 * BEFORE the workshop starts.
 * 
 * WHAT THIS DOES:
 * 
 * Phase 1 (Challenge 2 — System Test):
 *   - Broadcasts a test number on group 1
 *   - Press A to start broadcasting
 *   - Students verify their receivers work
 * 
 * Phase 2 (Challenge 4 — Hacking):
 *   - Listens on ALL student group numbers
 *   - Only responds when it receives the SECRET_KEY
 *   - Sends back the RESPONSE_MSG (treasure clue)
 * 
 * CONFIGURATION:
 *   - SECRET_KEY: the number students must find
 *   - RESPONSE_MSG: the clue they receive
 *   - TEST_NUMBER: the number sent during system test
 *   - MIN_GROUP / MAX_GROUP: range of student groups
 * 
 * CONTROLS:
 *   Button A = Start Phase 1 (broadcast test number)
 *   Button B = Start Phase 2 (listen for key)
 *   Button A+B = Show current mode on screen
 * 
 * ========================================
 */

// ====== CONFIGURATION — CHANGE THESE! ======
const SECRET_KEY = 42           // The number students must brute-force
const RESPONSE_MSG = "NORTH"    // Clue revealed when key is found
const TEST_NUMBER = 7           // Number broadcast during system test
const MIN_GROUP = 2             // Lowest student group number
const MAX_GROUP = 15            // Highest student group number
// ============================================

let currentMode = 0  // 0 = idle, 1 = broadcasting, 2 = listening
let currentGroup = MIN_GROUP

// Show "M" for Matrix on startup
basic.showString("M")

// ---- PHASE 1: SYSTEM TEST (Button A) ----
// Broadcasts a test number on group 1 every 2 seconds
input.onButtonPressed(Button.A, function () {
    currentMode = 1
    radio.setGroup(1)
    basic.showString("1")
    basic.pause(500)

    // Broadcast continuously until mode changes
    while (currentMode == 1) {
        radio.sendNumber(TEST_NUMBER)
        basic.showNumber(TEST_NUMBER)
        basic.pause(2000)
    }
})

// ---- PHASE 2: LISTENING FOR KEY (Button B) ----
// Cycles through all student groups and listens
input.onButtonPressed(Button.B, function () {
    currentMode = 2
    basic.showString("2")
    basic.pause(500)

    // We need to listen on each student group
    // Since micro:bit can only be on one group at a time,
    // we cycle through them rapidly
    while (currentMode == 2) {
        for (let g = MIN_GROUP; g <= MAX_GROUP; g++) {
            if (currentMode != 2) break
            radio.setGroup(g)
            currentGroup = g
            basic.pause(100)
        }
    }
})

// Listen for incoming numbers
radio.onReceivedNumber(function (receivedNumber) {
    // Only respond in Phase 2
    if (currentMode != 2) return

    // Check if it's the secret key!
    if (receivedNumber == SECRET_KEY) {
        // FOUND IT! Send back the clue
        radio.sendString(RESPONSE_MSG)

        // Visual confirmation for the teacher
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showString("G" + currentGroup)
        basic.pause(1000)
    }
})

// ---- SHOW CURRENT MODE (Button A+B) ----
input.onButtonPressed(Button.AB, function () {
    if (currentMode == 0) {
        basic.showString("IDLE")
    } else if (currentMode == 1) {
        basic.showString("SEND")
    } else {
        basic.showString("LISTEN")
    }
    // Reset to idle
    currentMode = 0
    basic.pause(500)
    basic.showString("M")
})
