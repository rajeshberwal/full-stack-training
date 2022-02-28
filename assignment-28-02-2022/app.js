var canvas = document.getElementById('can');
can.width = 1000;
can.height = 600;
var ctx = canvas.getContext('2d');

function star(i, j) {
    ctx.beginPath();
    ctx.moveTo(i + 36, j + 0.0);
    ctx.lineTo(i + 47, j+ 23.3);
    ctx.lineTo(i + 72.6, j+ 26.1);
    ctx.lineTo(i + 54, j+ 43.6);
    ctx.lineTo(i + 58.3, j+ 68.3);
    ctx.lineTo(i + 108/3, j+ 56.6);
    ctx.lineTo(i + 13.73, j+ 68.3);
    ctx.lineTo(i + 18.3, j+ 43.6);
    ctx.lineTo(i + 0.3, j + 26);
    ctx.lineTo(i + 25, j+ 22.6);
    ctx.lineTo(i + 36, j+ 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke()
}

function printStars() {
    ctx.fillStyle = '#c8b7dc';

    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 1000, Math.random() * 600, Math.random() * 10, 0, 2 * Math.PI);
        ctx.fill();
    }

    star(0, 0);
    star(500, 0);
    star(0, 500);
    star(0, 250);
    star(500, 500);
    star(900, 0);
    star(900, 0);
    star(900, 250);
    star(900, 500);
}

function myDetails() {
    var name = document.getElementById('name').value;
    var bdate = document.getElementById('bdate').valueAsNumber;

    let now = new Date();
    let diff = Math.abs(now - bdate);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    
    let msg = `Congratulations ${name}! on your ${age}th birthday!`;
    return msg
}

function printMassage() {
    let msg = myDetails();
    ctx.font = '30px Arial';
    ctx.fillStyle = '#c8b7dc';
    ctx.fillText(msg, 175, 250);
}

function myCard() {
    printStars();
    printMassage();

    ctx.stroke()
}