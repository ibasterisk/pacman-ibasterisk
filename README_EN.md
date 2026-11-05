# iBasterisk Maze Edition

**Language:** [![Slovenčina](images/sk.png)](README.md) | [![English](images/en.png)](README_EN.md)


Retro arcade maze game customized for the iBasterisk ecosystem.

## Features

- Browser-based arcade game
- Custom iBasterisk neon design
- Keyboard controls
- Sound effects
- Docker deployment
- Native ARM64 support
- Nginx web server

## Docker deployment

Run:

    docker compose up -d --build

## Configuration

The application runs on port 80 inside the container.

The host port is configured in docker-compose.yml.

## Project structure

- Dockerfile - Docker image definition
- docker-compose.yml - Container configuration
- nginx.conf - Web server configuration
- source/ - Game source code

## Credits

iBasterisk Maze Edition is a customized version of the
open-source pacman-canvas project.

Original project:
https://github.com/platzhersh/pacman-canvas

Original project license: CC0 1.0 Universal.

## GitHub

https://github.com/ibasterisk

## 🇸🇰 🇬🇧 Localization

The game supports Slovak and English via the SK / EN switch.

- Localized menus, instructions and game messages
- Custom retro player name dialog
- Press Start 2P pixel font with Slovak character support
- Selected language remembered in the browser

## 👤 Players and automatic Highscore

Players enter their name before starting a game.

- Player name is required, maximum 30 characters
- Last player name is remembered
- New games can use a different player name
- Scores are saved automatically during gameplay
- The leaderboard displays TOP 10 results
- Each player's personal best is preserved

### 💾 Score storage

The leaderboard uses browser `localStorage`.

**Important:** Scores are not stored on the Docker server.
Each browser has its own leaderboard. Clearing site data
may remove saved scores.

No PHP backend or database is required.
A shared online leaderboard is not implemented yet.

## ⌨️ Controls

- Arrow keys or W / A / S / D – movement
- Space – pause / resume
- N – new game
- M – toggle sound

## 🐄 iBasterisk Edition

The game also includes our legendary `apt-get moo`.

Press Start 2P is distributed under the
SIL Open Font License. See
`source/fonts/OFL-PressStart2P.txt`.
