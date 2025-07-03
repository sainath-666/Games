// This file contains the data for the games to be displayed on the main page.
const games = [
  {
    name: "Snake Game",
    image: "assets/snake.png",
    playLink: "#",
    codeLink: "#",
  },
  {
    name: "Memory Game",
    image: "assets/memory.png",
    playLink: "#",
    codeLink: "#",
  },
  {
    name: "Number Game",
    image: "assets/number.png",
    playLink: "#",
    codeLink: "#",
  },
  {
    name: "2408 Game",
    image: "assets/2408.png",
    playLink: "#",
    codeLink: "#",
  },
];

function renderGames() {
  const container = document.getElementById("games-container");
  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.image}" alt="${game.name}" class="game-image" />
      <h2>${game.name}</h2>
      <div class="game-buttons">
        <button onclick="window.location.href='${game.playLink}'">Play</button>
        <button onclick="window.location.href='${game.codeLink}'">Code</button>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderGames);
