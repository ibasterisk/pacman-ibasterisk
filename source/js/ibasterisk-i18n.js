(function () {
    "use strict";

    const translations = {
        sk: {
            newGame: "Nová hra",
            highscore: "Najlepšie skóre",
            instructions: "Inštrukcie",
            info: "Informácie",
            back: "< Späť",
            score: "Skóre",
            level: "Úroveň",
            lives: "Životy",
            clickToPlay: "Klikni pre štart",
            controls: "Ovládanie",
            ghosts: "Duchovia",
            ghostMoods: "Správanie duchov",
            items: "Predmety",
            pause: "Pauza",
            resume: "Klikni pre pokračovanie",
            gameOver: "Koniec hry",
            totalScore: "Celkové skóre",
            writtenBy: "Written by iBasterisk",
            version: "Verzia",
            restartConfirm: "Naozaj chceš začať novú hru?",
            clickContinue: "Klikni pre pokračovanie!",
            save: "Uložiť",
            invalidScore: "Tvoje skóre vyzerá nesprávne. Rebríček je určený pre poctivých hráčov.",
            savingScore: "Ukladám skóre...",
            viewHighscore: "Zobraziť rebríček",
            enterName: "Zadaj meno hráča.",
            enterPlayerName: "Zadaj svoje meno pred začiatkom hry:",
            confirm: "OK",
            cancel: "Zrušiť",
            noScores: "Zatiaľ žiadne výsledky.",
            storageError: "Výsledok sa nepodarilo uložiť do prehliadača."

        },
        en: {
            newGame: "New Game",
            highscore: "Highscore",
            instructions: "Instructions",
            info: "Info",
            back: "< Back",
            score: "Score",
            level: "Level",
            lives: "Lives",
            clickToPlay: "Click to Play",
            controls: "Controls",
            ghosts: "Ghosts",
            ghostMoods: "Ghost moods",
            items: "Items",
            pause: "Pause",
            resume: "Click to Resume",
            gameOver: "Game Over",
            totalScore: "Total Score",
            writtenBy: "Written by iBasterisk",
            version: "Version",
            restartConfirm: "Are you sure you want to restart?",
            clickContinue: "Click to continue!",
            save: "Save",
            invalidScore: "Your score looks fake. The highscore list is only for honest players.",
            savingScore: "Saving highscore...",
            viewHighscore: "View Highscore List",
            enterName: "Please enter your name.",
            enterPlayerName: "Enter your name before starting:",
            confirm: "OK",
            cancel: "Cancel",
            noScores: "No scores yet.",
            storageError: "Could not save the score in this browser."

        }
    };

    function getLanguage() {
        try {
            return localStorage.getItem("ibasterisk-maze-language") === "en"
                ? "en"
                : "sk";
        } catch (e) {
            return "sk";
        }
    }

    let language = getLanguage();

    function t(key) {
        return translations[language][key] || key;
    }

    function applyLanguage() {
        document.documentElement.lang = language;

        document.querySelectorAll("[data-lang-section]").forEach(function (element) {
            element.hidden = element.dataset.langSection !== language;
        });

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            element.textContent = t(element.dataset.i18n);
        });

        document.querySelectorAll("[data-language]").forEach(function (button) {
            button.classList.toggle(
                "active",
                button.dataset.language === language
            );
        });

        // Obnovime dynamicke hodnoty bez straty skore.
        if (typeof game !== "undefined" && game && game.score) {
            game.score.refresh(".score");

            if (typeof game.refreshLevel === "function") {
                game.refreshLevel(".level");
            }

            if (typeof pacman !== "undefined" && pacman &&
                typeof game.drawHearts === "function") {
                game.drawHearts(pacman.lives);
            }
        }
    }

    function setLanguage(value) {
        if (!translations[value]) return;

        language = value;

        try {
            localStorage.setItem("ibasterisk-maze-language", value);
        } catch (e) {}

        applyLanguage();
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-language]").forEach(function (button) {
            button.addEventListener("click", function () {
                setLanguage(button.dataset.language);
            });
        });

        applyLanguage();
    });

    window.iBasteriskI18n = {
        t: t,
        setLanguage: setLanguage,
        applyLanguage: applyLanguage,
        getLanguage: function () {
            return language;
        }
    };
})();
