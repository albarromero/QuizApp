const quizData = [
    {
        question: "Which of these labels allows line breaks?",
        a:"<br>",
        b:"<hr>",
        c:"<body>",
        d:"None of the above",
        correct:"a",
    },
    {
        question: "What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cascade Style Shit",
        correct:"b",
    },
    {
        question: "What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"A and B are correct",
        d:"None of the above",
        correct:"a",
    },
    {
        question: "Most shopping carts work because they use ____ to store information about your activity on a website",
        a:"server",
        b:"cookies",
        c:"web",
        d:"SQL",
        correct:"b",
    },
    {
        question: "What is the specific standard language for applying presentation styles to our web pages?",
        a:"Javascript",
        b:"CSS",
        c:"Java",
        d:"Typescript",
        correct:"b",
    },
];

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answer = document.querySelectorAll(".answer");
const a_txt = document.getElementById("a_txt");
const b_txt = document.getElementById("b_txt");
const c_txt = document.getElementById("c_txt");
const d_txt = document.getElementById("d_txt");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    cleanSelection();

    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;
}

function cleanSelection() {
    answer.forEach(answer => answer.checked = false);
}

submitBtn.addEventListener("click", ()=> {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if(currentQuiz<quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You anwered ${score}/${quizData.length}
            questions correctly. </h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

function getSelected() {
    let selected;

    answer.forEach(answer => {
        if(answer.checked) {
            selected = answer.id;
        }
    })

    return selected;
}