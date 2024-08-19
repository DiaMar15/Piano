debugger

const pianoKeys = document.querySelectorAll('.key');
let audio = new Audio();

const play = (key) => {
    audio.src = `./sounds/${key}.ogg`;
    audio.play();
};

const nota = {
    'a': 'DO4',
    'w': 'REb4',
    's': 'RE4',
    'e': 'MIb4',
    'd': 'MI4',
    'f': 'FA4',
    'r': 'SOLb4',
    'g': 'SOL4',
    't': 'LAb4',
    'h': 'LA4',
    'y': 'SIb4',
    'u': 'SI4',
    'j': 'DO5',
    'i': 'REb5',
    'k': 'RE5',
    'o': 'MIb5',
    'l': 'MI5'
};

const teclado = (event) => {
    const key = event.key;
    if (nota[key]) {
        const keyElement = document.querySelector(`.key[data-nota="${nota[key]}"]`);
        if (keyElement) {
            play(nota[key]);
            keyElement.classList.add('pressed');
        }
    }
};

const mouse = (event) => {
    const key = event.target.dataset.nota;
    if (key) {
        play(key);
        event.target.classList.add('pressed');
    }
};

const liberarTeclado = (event) => {
    const key = event.key;
    if (nota[key]) {
        const keyElement = document.querySelector(`.key[data-nota="${nota[key]}"]`);
        if (keyElement) {
            keyElement.classList.remove('pressed');
        }
    }
};


const liberarMouse = (event) => {
    if (event.target.classList.contains('key')) {
        event.target.classList.remove('pressed');
    }
};

document.addEventListener('keydown', teclado);
document.addEventListener('keyup', liberarTeclado);

pianoKeys.forEach(key => {
    key.addEventListener('click', mouse);
    key.addEventListener('mouseup', liberarMouse);
    key.addEventListener('mouseleave', liberarMouse);
});
