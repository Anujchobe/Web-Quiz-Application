const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["New York", "London", "Paris", "Dublin"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Earth", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "What is the powerhouse of the cell?",
    choices: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic Reticulum"],
    answer: "Mitochondria"
  },
  {
    question: "What is the closest planet to the Sun?",
    choices: ["Earth", "Mars", "Venus", "Mercury"],
    answer: "Mercury"
  },
  {
    question: "Who is known as the father of modern physics?",
    choices: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Nikola Tesla"],
    answer: "Isaac Newton"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    choices: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan"
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Which chemical element has the symbol 'Fe' and atomic number 26?",
    choices: ["Iron", "Gold", "Silver", "Copper"],
    answer: "Iron"
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the world's longest river?",
    choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    answer: "Amazon"
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What is the capital of Japan?",
    choices: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo"
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci"
  }
  // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  questionElement.textContent = quizData[currentQuestion].question;
  choicesElement.innerHTML = "";
  for (let i = 0; i < quizData[currentQuestion].choices.length; i++) {
    const li = document.createElement("li");
    li.textContent = quizData[currentQuestion].choices[i];
    li.onclick = function() {
      checkAnswer(quizData[currentQuestion].choices[i]);
    };
    choicesElement.appendChild(li);
  }
}

function checkAnswer(userAnswer) {
  const resultElement = document.getElementById("result");
  if (userAnswer === quizData[currentQuestion].answer) {
    resultElement.textContent = "Correct!";
    score++;
  } else {
    resultElement.textContent = "Wrong! The correct answer is " + quizData[currentQuestion].answer;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `<h2>Quiz Complete!</h2><p>Your score is: ${score} out of ${quizData.length}</p>`;
  }
}

loadQuestion();
