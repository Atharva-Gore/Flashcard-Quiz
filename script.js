const cardContainer = document.getElementById("cardContainer");
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

function saveToStorage() {
  localStorage.setItem("flashcards", JSON.stringify(flashcards));
}

function renderCards() {
  cardContainer.innerHTML = "";
  flashcards.forEach((card, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="card-inner" onclick="flipCard(this)">
        <div class="card-front">${card.question}</div>
        <div class="card-back">${card.answer}</div>
      </div>
    `;
    div.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      deleteCard(index);
    });
    cardContainer.appendChild(div);
  });
}

function flipCard(cardElement) {
  cardElement.parentElement.classList.toggle("flipped");
}

function addCard() {
  const question = document.getElementById("question").value.trim();
  const answer = document.getElementById("answer").value.trim();

  if (!question || !answer) {
    alert("Please enter both question and answer.");
    return;
  }

  flashcards.push({ question, answer });
  saveToStorage();
  renderCards();

  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
}

function deleteCard(index) {
  if (confirm("Delete this card?")) {
    flashcards.splice(index, 1);
    saveToStorage();
    renderCards();
  }
}

function clearCards() {
  if (confirm("Clear all flashcards?")) {
    flashcards = [];
    saveToStorage();
    renderCards();
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

renderCards();
