import { render, setActInterval } from "./snake";

export function renderMainMenu() {
         displayButtons()
}

function displayButtons() {
    let startButton = document.createElement('input');
    let customButton = document.createElement('input');

    startButton.type = 'button';
    customButton.type = 'button';

    document.body.appendChild(startButton);
    document.body.appendChild(customButton);
}