// This file contains the data for the games to be displayed on the main page.
const games = [
  {
    name: "Snake Game",
    image: "assets/snake.png",
    playLink: "https://sainath-666.github.io/Snake_Game_1/",
    codeLink: "https://github.com/sainath-666/Snake_Game_1",
  },
  {
    name: "Memory Game",
    image: "assets/memory.png",
    playLink: "https://sainath-666.github.io/Memory_Game/",
    codeLink: "https://github.com/sainath-666/Memory_Game",
  },
  {
    name: "Number Game",
    image: "assets/number.png",
    playLink: "https://sainath-666.github.io/FindMyNumber_Game/",
    codeLink: "https://github.com/sainath-666/FindMyNumber_Game",
  },
  {
    name: "2408 Game",
    image: "assets/2408.png",
    playLink: "https://sainath-666.github.io/2048_Game/",
    codeLink: "https://github.com/sainath-666/2048_Game",
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
        <button onclick="window.open('${game.playLink}', '_blank')">Play</button>
        <button onclick="window.open('${game.codeLink}', '_blank')">Code</button>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderGames);
