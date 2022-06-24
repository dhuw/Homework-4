//defining global var  for dom manipulation for q, choices, and score text
const question = $('#question');
const choices = $('.choice-text');
const scoreText = $('#score');

//defining let var which values will change throughout the game
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQustions = [];

//defining list of potential questions to be called apon by currentQuestions
let questions = [
    {
        question: 'What types of variables can you define?',
        choice1: 'var',
        choice2: 'let',
        choice3: 'const',
        choice4: 'all of the above',
        answer: 'all of the above'
    },
    // question 1 ^^^^
    {
        question: 'How would you store an item to local storage?',
        choice1: 'localStorage.getItem()',
        choice2: 'localStorage.setItem()',
        choice3: 'localStorage.store()',
        choice4: 'localStorage.setLocal()',
        answer: 'localStorage.setItem()'
    },
    // question 2 ^^^^
    {
        question: 'Inside which HTML tag do we write JS code?',
        choice1: '<script>',
        choice2: '<jscript>',
        choice3: '<scripting>',
        choice4: '<javascript>',
        answer: '<script>'
    },
    // question 3 ^^^^
    {
        question: 'What is the correct JavaScript syntax to change the content of a <p> in HTML document?',
        choice1: 'document.getElement("p").innerHTML = "Hello World',
        choice2: '(p).innerHTML = "Hello World',
        choice3: 'getElement("p").value = "Hello World',
        choice4: 'document("p").innerHTML = "Hello World',
        answer: 'document.getElement("p").innerHTML = "Hello World'
    },
    // question 4 ^^^^
    {
        question: 'How would you write "Hello World" in an alert box?',
        choice1: 'msgBox("Hello World");',
        choice2: 'message("Hello World");',
        choice3: 'alertBox("Hello World");',
        choice4: 'alert("Hello World");',
        answer: 'alert("Hello World");'
    },
    // question 5 ^^^^
    {
        question: 'How do you create a function?',
        choice1: 'function:myFunction()',
        choice2: 'function = myFunction()',
        choice3: 'function myFunction()',
        choice4: 'var function.value() = myFunction()',
        answer: 'function myFunction()'
    },
    // question 6 ^^^^
    {
        question: 'How do you write an "if" statement?',
        choice1: 'if = i == 5',
        choice2: 'if (i == 5)',
        choice3: 'if i == 5 then',
        choice4: 'if i = 5',
        answer: 'if (i == 5)'
    },
    // question 7 ^^^^
    {
        question: 'How do you make a comment in JavaScript?',
        choice1: '/*example*/',
        choice2: '<!--example-->',
        choice3: '//example',
        choice4: '`example`',
        answer: '//example'
    },
    // question 8 ^^^^
    {
        question: 'What is the correct way to make an array?',
        choice1: 'var colors = ["red", "green", "blue"]',
        choice2: 'var colors = ("red", "green", "blue")',
        choice3: 'var colors = {"red", "green", "blue"}',
        choice4: 'var colors = "red", "green", "blue"',
        answer: 'var colors = ["red", "green", "blue"]'
    },
    // question 9 ^^^^
    {
        question: 'JavaScript is a ____-side programming language.',
        choice1: 'Client',
        choice2: 'Server',
        choice3: 'Both',
        choice4: 'None',
        answer: 'Both'
    },
    // question 10 ^^^^
]
console.log(questions)

//start game functionality and needed var
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQustions = [...questions]
    getNewQuestion()
}

//get new question function supplies new q when previous gets answered
getNewQuestion = () => {
    if(availableQustions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++

    //making random question appear
    const questionIndex = Math.floor(Math.random() * availableQustions.length)
    currentQuestion = availableQustions[questionIndex]
    question.innerHTML = currentQuestion.question

    choices.array.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQustions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        //if answer is correct add 100 to score
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();
        }, 1000)
    })
})

//increment score funt and calling start game
incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame();

