'use strict'

var gSize = 100

function onBallClick(elBall, maxDiameter) {
    gSize += getRandomInt(20, 60)
    if (gSize > maxDiameter) gSize = 100
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
    
    const randColor = getRandomColor()
    elBall.style.backgroundColor = randColor
}
