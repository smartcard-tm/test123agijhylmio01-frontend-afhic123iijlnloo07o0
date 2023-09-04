const quizData = [
    {
        question: "Что означает HTML?",
        a: "Hypertext Markup Language",
        b: 'Cascade stylesheet',
        c: 'Script java',
        d: 'All of the above',
        correct:'a',
    },
    {
        question: "Что означает CSS?",
        a: 'Hyperlink',
        b: 'Javascript',
        c: 'Cascade Style Sheet',
        d: 'All of the above',
        correct:"c",
    },
    {
        question: "2+2=",
        a: '5',
        b: '3',
        c: '6',
        d: '4',
        correct:'d', 

    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const question = document.getElementById('quiz-question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn = document.getElementById('submitBtn')

let currentQuiz = 0
score=0

loadQuiz()

function loadQuiz() {
    deselectAll()

    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAll() {
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
            <h2>Вы ответили ${score}/${quizData.length} правильно</h2>
            <button onclick='location.reload()'>Попробовать ещё</button>`
        }
    }
})
