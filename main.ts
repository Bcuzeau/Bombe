input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Temps = -1
})
let Temps = 0
Temps = 9
while (Temps > 0) {
    basic.showNumber(Temps)
    Temps += -1
    basic.pause(1000)
}
if (Temps == -1) {
    basic.showString("gagné")
    music.playMelody("E B C5 A B G A F ", 120)
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
