const span = document.querySelectorAll('span');
let winningScore = document.querySelector('#win');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
let maxScore = 5;
winningScore.addEventListener('change', function () {
    maxScore = this.value;
})
const reset = document.querySelector('#reset');
const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: span[0]
}
const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: span[1]
}
function startPlaying(p1, p2) {
    p1.score++;
    p1.display.textContent = p1.score;
    if (p1.score === Number(maxScore)) {
        p1.button.disabled = true;
        p2.button.disabled = true;
        p1.display.style.color = 'green';
        p2.display.style.color = 'red';
    }

}
player1.addEventListener('click', function () {
    startPlaying(p1, p2);
})
player2.addEventListener('click', function () {
    startPlaying(p2, p1);
})
reset.addEventListener('click', function () {
    p1.score = 0;
    p2.score = 0;
    p2.display.textContent = 0;
    p1.display.textContent = 0;
    p1.display.style.color = 'black';
    p2.display.style.color = 'black';
    p1.button.disabled = false;
    p2.button.disabled = false;

})