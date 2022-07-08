//defining const var for js file
const username = $('#username')
const saveScoreBtn = $('#save-score-btn')
const finalScore = $('#final-score')
const mostRecentScore = localStorage.getItem('most-recent-score')
//const for local storage
const highscores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 1000
//making local storage = page text
finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighscore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(10)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

    
}

//moment js 1h 1m 23sec countdown
