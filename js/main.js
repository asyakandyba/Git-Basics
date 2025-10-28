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

function onBallSwap() {
    const elBall = document.querySelector('.ball')
    const elAnotherBall = document.querySelector('.another-ball')

    const ballColor = window.getComputedStyle(elBall).backgroundColor
    const anotherBallColor = window.getComputedStyle(elAnotherBall).backgroundColor

    elBall.style.backgroundColor = anotherBallColor
    elAnotherBall.style.backgroundColor = ballColor

    const ballSize = window.getComputedStyle(elBall).width
    const anotherBallSize = window.getComputedStyle(elAnotherBall).width

    elBall.style.width = anotherBallSize
    elAnotherBall.style.width = ballSize

    elBall.style.height = anotherBallSize
    elAnotherBall.style.height = ballSize
}

function onBallReduceDiameter() {
    const elBall = document.querySelector('.ball')
    const elAnotherBall = document.querySelector('.another-ball')

    var ballSize = elBall.getBoundingClientRect().width - getRandomInt(20, 60)
    var anotherBallSize = elAnotherBall.getBoundingClientRect().width - getRandomInt(20, 60)

    if (ballSize < 100) ballSize = 100
    if (anotherBallSize < 100) anotherBallSize = 100

    elBall.style.width = ballSize + 'px'
    elAnotherBall.style.width = anotherBallSize + 'px'

    elBall.style.height = ballSize + 'px'
    elAnotherBall.style.height = anotherBallSize + 'px'
}