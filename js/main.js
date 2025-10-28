'use strict'

var gSize = 100

function onBallClick(elBall) {
    gSize += 50
    if (gSize > 400) gSize = 100
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'

}