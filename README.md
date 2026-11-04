# 🕹️ iBasterisk Maze Edition

**Jazyk:** 🇸🇰 Slovenčina | [🇬🇧 English](README_EN.md)

Retro arkádová hra s vlastným neónovým dizajnom,
prevádzkovaná prostredníctvom Docker kontajnera.

Projekt vychádza z otvorenej hry pacman-canvas,
ktorú sme upravili pre ekosystém iBasterisk.

## 🎮 Funkcie

- Hranie priamo vo webovom prehliadači
- Vlastný iBasterisk neónový dizajn
- Ovládanie klávesnicou
- Zvukové efekty
- Podpora Docker Compose
- Natívna podpora ARM64
- Webový server Nginx
- Možnosť prevádzky cez Tailscale

## 🐳 Požiadavky

- Linux server
- Docker Engine
- Docker Compose
- Voľný TCP port

## 📁 Štruktúra projektu

    pacman/
    ├── Dockerfile
    ├── docker-compose.yml
    ├── nginx.conf
    ├── .env.example
    ├── README.md
    ├── README_EN.md
    └── source/

## 🚀 Inštalácia

Naklonujeme repozitár:

    git clone https://github.com/ibasterisk/pacman-ibasterisk.git
    cd pacman-ibasterisk

Vytvoríme lokálnu konfiguráciu:

    cp .env.example .env

V súbore .env nastavíme IP adresu, na ktorej
má byť aplikácia dostupná.

Príklad:

    PACMAN_BIND_IP=127.0.0.1

Spustíme kontajner:

    docker compose up -d --build

## 🌐 Prístup k aplikácii

Predvolený port aplikácie je 3060.

Pri lokálnej konfigurácii:

    http://127.0.0.1:3060

Pri použití Tailscale nastavíme v .env
Tailscale IPv4 adresu servera.

## 🔧 Správa kontajnera

Stav:

    docker compose ps

Logy:

    docker compose logs --tail=50

Reštart:

    docker compose restart pacman

Zastavenie:

    docker compose down

## 🔄 Aktualizácia

    git pull
    docker compose up -d --build

## 🔐 Bezpečnosť

- Port môže byť viazaný iba na localhost alebo Tailscale.
- Verejné HTTPS je možné zabezpečiť cez Caddy.
- Lokálny súbor .env nie je súčasťou Git repozitára.
- Pred verejným nasadením odporúčame preveriť externé skripty.

## 📜 Licencia a pôvod

iBasterisk Maze Edition je upravená verzia projektu
pacman-canvas.

Pôvodný projekt:
https://github.com/platzhersh/pacman-canvas

Licencia pôvodného projektu: CC0 1.0 Universal.

Úpravy a Docker integrácia: iBasterisk.

## 👨‍💻 Autor úprav

**iBasterisk**

GitHub: https://github.com/ibasterisk
