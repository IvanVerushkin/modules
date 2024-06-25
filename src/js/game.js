import Character from './domain.js';
export default Game;
export class GameSavingData {};
export {readGameSaving};
export {writeGameSaving};

class Game {
    start() {
        console.log('game started');
    }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

// В модуле `game` импорт класса `Character`

// Экспорт из модуля `game` класса `Game` в качестве дефолтного, 
// класса `GameSavingData` и функций `readGameSaving` и `writeGameSaving`