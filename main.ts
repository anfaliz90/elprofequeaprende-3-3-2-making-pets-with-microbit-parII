input.onButtonPressed(Button.A, function () {
    Time += 1
    basic.showNumber(Time)
})
input.onButtonPressed(Button.AB, function () {
    Time = 0
    basic.showNumber(Time)
})
input.onButtonPressed(Button.B, function () {
    while (Time > 0) {
        basic.pause(60000)
        Time += -1
        basic.showNumber(Time)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(1000)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
let Time = 0
basic.showString("Timer")
Time = 0
