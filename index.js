let homeScore = document.querySelector(".home")
let guestScore = document.querySelector(".away")
let count = 0
let awayCount = 0

function plus1() {
    count += 1
    homeScore.innerText = count
}
function plus2() {
    count += 2
    homeScore.innerText = count
}
function plus3() {
    count += 3
    homeScore.innerText = count
}


function plus1Away() {
    awayCount += 1
    guestScore.innerText = awayCount
}
function plus2Away() {
    awayCount += 2
    guestScore.innerText = awayCount
}
function plus3Away() {
    awayCount += 3
    guestScore.innerText = awayCount
}

