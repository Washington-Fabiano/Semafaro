let img = document.getElementById( 'img' );   /*poderia ser usado const*/
let buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

let trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

let nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

let changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

let stopAutomatic = () => {
    clearInterval ( intervalId );
}

let turnOn = {
    'red':      () => img.src = 'vermelho.png',
    'yellow':   () => img.src = 'amarelo.png',
    'green':    () => img.src = 'verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight );