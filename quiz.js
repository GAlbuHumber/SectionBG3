// Quiz data
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: [
            { text: "London", image: "london.jpg" },
            { text: "Paris", image: "paris.jpg" },
            { text: "Berlin", image: "berlin.jpg" },
            { text: "Madrid", image: "madrid.jpg" }
        ],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            { text: "Mars", image: "mars.jpg" },
            { text: "Venus", image: "venus.jpg" },
            { text: "Jupiter", image: "jupiter.jpg" },
            { text: "Mercury", image: "mercury.jpg" }
        ],
        answer: "Mars"
    },
    {
        question: "Which Prof is better than Gabriel?",
        options: [
            { text: "No one", image: "noone.jpg" },
            { text: "Isaac Newton", image: "isac.jpg" },
            { text: "Benjamin Franklin", image: "benj.jpg" },
            { text: "Albert Einstein", image: "albert.jpg" }
        ],
        answer: "No one"
    },
    {
        question: "What is the capital of Japan?",
        options: [
            { text: "Tokyo", image: "tokyo.jpg" },
            { text: "Beijing", image: "beijing.jpg" },
            { text: "Seoul", image: "seoul.jpg" },
            { text: "Bangkok", image: "bangkok.jpg" }
        ],
        answer: "Tokyo"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            { text: "Leonardo da Vinci", image: "vinci.jpg" },
            { text: "Pablo Picasso", image: "picasso.jpg" },
            { text: "Vincent van Gogh", image: "van.jpg" },
            { text: "Claude Monet", image: "monet.jpg" }
        ],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Morrocco?",
        options: [
            { text: "Rabat", image: "rabat.jpg" },
            { text: "Agadir", image: "agadir.jpg" },
            { text: "Marrakech", image: "kech.jpg" },
            { text: "Casablanca", image: "casa.jpg" }
        ],
        answer: "Rabat"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
            { text: "William Shakespeare", image: "shake.jpg" },
            { text: "Charles Dickens", image: "charles.jpg" },
            { text: "Jane Austen", image: "jane.jpg" },
            { text: "Mark Twain", image: "mark.jpg" }
        ],
        answer: "William Shakespeare"
    },
    {
        question: "Who invented the telephone?",
        options: [
            { text: "Alexander Graham Bell", image: "bell.jpg" },
            { text: "Thomas Edison", image: "edison.jpg" },
            { text: "Nikola Tesla", image: "tesla.jpg" },
            { text: "Galileo Galilei", image: "galileo.jpg" }
        ],
        answer: "Alexander Graham Bell"
    }
];


// Global variables
let currentQuestion = 0;
let score = 0;

// Function to load question
function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuizQuestion = quizQuestions[currentQuestion];

    if (currentQuizQuestion) {
        questionContainer.innerHTML = `
            <h2>${currentQuizQuestion.question}</h2>
            <ul>
                ${currentQuizQuestion.options.map(option => `
                    <li>
                        <label>
                            <img src="${option.image}" alt="${option.text}">
                            <input type="radio" name="answer" value="${option.text}">
                            ${option.text}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
    } else {
        // Quiz finished, show result
        showResult();
    }
}

// Function to show result
function showResult() {
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result');

    quizForm.style.display = 'none';
    resultContainer.textContent = `Your score: ${score}/${quizQuestions.length}`;
}

// Function to check answer
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        if (selectedAnswer.value === quizQuestions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        loadQuestion();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();

    const quizForm = document.getElementById('quiz-form');
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        checkAnswer();
    });
});