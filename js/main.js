'use strict'

var gSize = 100

function onBallClick(elBall) {
    gSize += 50
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
}