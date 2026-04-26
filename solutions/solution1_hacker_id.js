/**
 * ========================================
 * SOLUTION 1: HACKER-ID
 * ========================================
 * Agent-ID on button A, hacker signature on A+B
 * ========================================
 */

// Button A — show Agent-ID
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(1000)
    basic.clearScreen()
})

// Button B — show a different icon
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(1000)
    basic.clearScreen()
})

// OPTIONAL: Button A+B — hacker signature animation
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(400)
    basic.showIcon(IconNames.Sword)
    basic.pause(400)
    basic.showIcon(IconNames.Target)
    basic.pause(400)
    basic.showIcon(IconNames.Skull)
    basic.pause(400)
    basic.clearScreen()
})
