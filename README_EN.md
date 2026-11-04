# iBasterisk Maze Edition

**Language:** [🇸🇰 Slovenčina](README.md) | 🇬🇧 English


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
