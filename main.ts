input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Temps = -1
    Temps = -1
})
let Temps = 0
Temps = 9
while (Temps > 0) {
    basic.showNumber(Temps)
    Temps += -1
    basic.pause(800)
}
if (Temps == -1) {
    basic.showString("Bravo")
    music.playMelody("C5 B A B C5 B C5 - ", 250)
} else {
    basic.clearScreen()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
}
