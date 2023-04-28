// Obtener el objeto canvas
var canvas = document.getElementById("myCanvas");

// Obtener el contexto del canvas
var ctx = canvas.getContext("2d");

// Posición inicial del rectángulo
var rectX = canvas.width / 2;
var rectY = canvas.height / 2;

// Función para dibujar el rectángulo en una posición
function drawRect() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(rectX, rectY, 10, 10);
}

// Función para actualizar la posición del rectángulo en cada cuadro de animación
function updateRect(event) {
    switch (event.keyCode) {
        case 65: // Izquierda
            rectX -= 5;
            break;
        case 87: // Arriba
            rectY -= 5;
            break;
        case 68: // Derecha
            rectX += 5;
            break;
        case 83: // Abajo
            rectY += 5;
            break;
    }
}

// Función para animar el rectángulo
function animate() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el rectángulo en la nueva posición
    drawRect();
}
window.addEventListener("keydown", updateRect);
// Comenzar la animación
setInterval(animate, 10);