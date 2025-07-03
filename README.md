# Games Gallery

A visually appealing web page to showcase and play your JavaScript games, with direct links to play and view the code for each game.

## Features

- Modern, dark blue themed UI with responsive design
- Each game is displayed as a card with:
  - Game image
  - Game name
  - "Play" button (opens the game in a new tab)
  - "Code" button (opens the GitHub repo in a new tab)
- Fixed footer and stylish header
- Mobile-friendly layout (1 card per row on small screens)

## Games Included

- **Snake Game**  
  [Play](https://sainath-666.github.io/Snake_Game_1/) | [Code](https://github.com/sainath-666/Snake_Game_1)
- **Memory Game**  
  [Play](https://sainath-666.github.io/Memory_Game/) | [Code](https://github.com/sainath-666/Memory_Game)
- **Number Game**  
  [Play](https://sainath-666.github.io/FindMyNumber_Game/) | [Code](https://github.com/sainath-666/FindMyNumber_Game)
- **2408 Game**  
  [Play](https://sainath-666.github.io/2048_Game/) | [Code](https://github.com/sainath-666/2048_Game)

## How It Works

- All game data is managed in `games.js`.
- The main page (`index.html`) dynamically renders the cards using this data.
- Styling is handled in `styles.css` for a modern, attractive look.

## Usage

1. Clone or download this repository.
2. Place your game images in the `assets/` folder.
3. Update `games.js` to add or edit games.
4. Open `index.html` in your browser.

## Customization

- To add a new game, add an object to the `games` array in `games.js` with `name`, `image`, `playLink`, and `codeLink`.
- You can further customize the theme by editing `styles.css`.

## License

This project is for personal and educational use. Replace links and images with your own as needed.
