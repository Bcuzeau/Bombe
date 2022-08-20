input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Temps = -1
})
let Temps = 0
Temps = 10
while (Temps > 0) {
    Temps += -1
    basic.pause(1000)
    basic.showNumber(Temps)
}
if (Temps == -1) {
    basic.showString("gagné")
    music.playMelody("E B C5 A B G A F ", 120)
} else {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
}
