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

function onBallSwap(){
    console.log('hi:')
    const elBall = document.querySelector('.ball')
    const elAnotherBall = document.querySelector('.another-ball')

    const ballColor =  window.getComputedStyle(elBall).backgroundColor
    const anotherBallColor = window.getComputedStyle(elAnotherBall).backgroundColor

    elBall.style.backgroundColor = anotherBallColor
    elAnotherBall.style.backgroundColor = ballColor

    const ballWidth =  window.getComputedStyle(elBall).width
    const anotherBallwidth = window.getComputedStyle(elAnotherBall).width

    elBall.style.width = anotherBallwidth
    elAnotherBall.style.width = ballWidth

    elBall.style.height = anotherBallwidth
    elAnotherBall.style.height = ballWidth


}