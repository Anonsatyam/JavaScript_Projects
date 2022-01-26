let c = document.getElementById("canvas");
let clear = document.getElementById('clear');
let plus = document.getElementById('increase');
let minus = document.getElementById('decrease');
let num = document.getElementById("number");
let color = document.getElementById("color");

let ctx = c.getContext("2d");
let size = 5;
let x, y;
pressed = false;

num.innerHTML = size;

c.addEventListener('mousedown', e => {
    pressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

c.addEventListener('mouseup', e => {
    pressed = false;
    x = undefined;
    y = undefined;
})

c.addEventListener('mousemove', e => {
    if (pressed) {
        x2 = e.offsetX;
        y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;
    }

})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(m1, m2, l1, l2) {
    ctx.lineWidth = size * 2;
    ctx.beginPath();
    ctx.moveTo(m1, m2);
    ctx.lineTo(l1, l2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

color.addEventListener('change', (e) => {
    console.log(e);
    color = e.target.value
})

clear.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
})

plus.addEventListener('click', () => {
    size += 5;
    num.innerHTML = size;
})

minus.addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
        num.innerHTML = size;
    }
})




// drawCircle(50, 50);
// drawLine(200, 200, 200, 400);