const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#save-score-btn')
const finalScore = document.querySelector('#final-score')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 1000

finalScore.innerText = mostRecentScore


saveHighScore = e => {
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
    window.location.assign('./highscores.html')

}
//moment js 1h 1m 23sec countdown
