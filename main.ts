input.onButtonPressed(Button.A, function () {
    Bucket.change(LedSpriteProperty.X, -1)
})
function NEWGAME () {
    Banana.set(LedSpriteProperty.Y, 0)
    Banana.set(LedSpriteProperty.X, randint(0, 4))
    basic.pause(1000)
}
input.onButtonPressed(Button.AB, function () {
    if (game.isRunning()) {
        game.pause()
    } else if (game.isPaused()) {
        game.resume()
    }
})
input.onButtonPressed(Button.B, function () {
    Bucket.change(LedSpriteProperty.X, 1)
})
let sprite = 0
let Bucket: game.LedSprite = null
let Banana: game.LedSprite = null
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.pause(500)
game.startCountdown(120000)
Banana = game.createSprite(randint(0, 4), 0)
Bucket = game.createSprite(2, 4)
let Speed = 400
game.setLife(3)
game.setScore(0)
basic.pause(500)
basic.forever(function () {
    while (!(game.isGameOver())) {
        Banana.change(LedSpriteProperty.Y, 1)
        basic.pause(Speed)
        if (Banana.isTouching(Bucket)) {
            music.playTone(440, music.beat(BeatFraction.Sixteenth))
            game.addScore(1)
            if (game.score() == 10) {
                Speed = 350
            } else if (game.score() == 20) {
                sprite = 300
            }
            NEWGAME()
        } else if (Banana.get(LedSpriteProperty.Y) == 4) {
            music.playTone(175, music.beat(BeatFraction.Sixteenth))
            game.removeLife(1)
            NEWGAME()
        }
    }
})
