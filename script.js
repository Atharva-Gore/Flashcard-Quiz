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
  { question: "Which dance form is from Kerala?", answer: "Kathakali" },
  { question: "Which monument is in Agra?", answer: "Taj Mahal" },
  { question: "What is the currency of India?", answer: "Rupee" },
  { question: "Which Indian state has the highest population?", answer: "Uttar Pradesh" },
  { question: "Which Indian freedom fighter was known as the 'Iron Man'?", answer: "Sardar Vallabhbhai Patel" },
  { question: "Where is the Golden Temple located?", answer: "Amritsar" },
  { question: "Which city is known as the IT hub of India?", answer: "Bangalore" },
  { question: "What is the national bird of India?", answer: "Peacock" },
  { question: "Which is the longest river in India?", answer: "Ganga" },
  { question: "Who is the father of the Indian Constitution?", answer: "Dr. B. R. Ambedkar" },
  ...Array.from({ length: 180 }, (_, i) => ({
    question: `India GK Question #${i + 21}`,
    answer: `Answer ${i + 21}`
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

renderCards();
