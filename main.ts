input.onButtonPressed(Button.A, function () {
    moving = 0
})
let moving = 0
moving = 1
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (moving == 1) {
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.1)
        while (cuteBot.ultrasonic(cuteBot.SonarUnit.Inches) <= 10) {
            cuteBot.moveTime(cuteBot.Direction.backward, 50, 0.25)
            cuteBot.moveTime(cuteBot.Direction.left, 50, 0.25)
        }
    } else {
        cuteBot.stopcar()
    }
})
