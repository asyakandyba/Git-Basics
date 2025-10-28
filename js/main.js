'use strict'

var gSize = 100

function onBallClick(elBall) {
    gSize += getRandomInt(20, 60)
    console.log('gSize:', gSize)
    if (gSize > 400) gSize = 100
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'

}