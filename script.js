const cardContainer = document.getElementById("cardContainer");

const flashcards = [
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "Which river is considered the holiest in India?", answer: "Ganga" },
  { question: "Who was the first Prime Minister of India?", answer: "Jawaharlal Nehru" },
  { question: "What is the national animal of India?", answer: "Tiger" },
  { question: "Which city is known as the 'Pink City'?", answer: "Jaipur" },
  { question: "In which year did India gain independence?", answer: "1947" },
  { question: "What is the national flower of India?", answer: "Lotus" },
  { question: "Which Indian state is famous for tea?", answer: "Assam" },
  { question: "What is the full form of ISRO?", answer: "Indian Space Research Organisation" },
  { question: "Who wrote the Indian national anthem?", answer: "Rabindranath Tagore" },
  ...Array.from({ length: 190 }, (_, i) => ({
    question: `India GK Question #${i + 11}`,
    answer: `Answer ${i + 11}`
  }))
];

function renderCards() {
  cardContainer.innerHTML = "";
  flashcards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="card-inner" onclick="flipCard(this)">
        <div class="card-front">${card.question}</div>
        <div class="card-back">${card.answer}</div>
      </div>
    `;
    cardContainer.appendChild(div);
  });
}

function flipCard(cardElement) {
  cardElement.parentElement.classList.toggle("flipped");
}

function shuffleCards() {
  flashcards.sort(() => Math.random() - 0.5);
  renderCards();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

window.addEventListener("DOMContentLoaded", renderCards);
