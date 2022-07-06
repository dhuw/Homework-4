const username = $('#username')
const saveScoreBtn = $('#save-score-btn')
const finalScore = $('#final-score')
const mostRecentScore = $('#most-recent-score')

const highscores = JSON.parse(localStorage.getItem('highscores')) || []

const MAX_HIGHSCORES = 1000

finalScore.innerText = mostRecentScore
//makes save btn work when the input has a value other then null
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})