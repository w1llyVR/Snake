// Obtener el objeto canvas
var canvas = document.getElementById("myCanvas");
var puntos
    // Obtener el contexto del canvas
var ctx = canvas.getContext("2d");

// Posición inicial del rectángulo
var rectX = canvas.width / 2;
var rectY = canvas.height / 2;

var desX = 10
var desY = 0
var vivo = true

var puntosActuales = 0
let apple = {
    posX: 0,
    posY: 0
}

// Función para dibujar el rectángulo en una posición
function drawRect() {
    ctx.fillStyle = "#008000";
    ctx.fillRect(rectX, rectY, 10, 10);
}

function drawApple() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(apple.posX, apple.posY, 10, 10);
}

function updateRect() {
    rectX += desX
    rectY += desY
    if (rectX < 0 || rectX > canvas.width || rectY < 0 || rectY > canvas.height)
        vivo = false
    if (rectX == apple.posX && rectY == apple.posY)
        puntos += 10
    if (vivo == false) {
        clearInterval(intervalo)
        location.reload()
    }

}
// Función para actualizar la posición del rectángulo en cada cuadro de animación
function updateDirection(event) {
    switch (event.keyCode) {
        case 65: // Izquierda
            if (desX == 0) {
                desX = -10;
                desY = 0
            }
            break;
        case 87: // Arriba
            if (desY == 0) {
                desY = -10;
                desX = 0;
            }
            break;
        case 68: // Derecha
            if (desX == 0) {
                desX = 10;
                desY = 0
            }
            break;
        case 83: // Abajo
            if (desY == 0) {
                desY = 10;
                desX = 0;
            }
            break;
    }
}

// Función para animar el rectángulo
function animate() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateRect();
    // Dibujar el rectángulo en la nueva posición
    drawRect();
    drawApple();
}
window.addEventListener("keydown", updateDirection);
// Comenzar la animación

const intervalo = setInterval(animate, 200);