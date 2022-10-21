import { render, setActInterval } from "./snake";

export function renderMainMenu() {
         displayButtons()
}

function displayButtons() {
    let startButton = document.createElement('input');
    let customButton = document.createElement('input');
    let startText = document.createElement('p');

    startButton.type = 'button';
    customButton.type = 'button';

    startButton.value = "Jouer"
    document.body.appendChild(startButton);
    document.body.appendChild(customButton);
}