var btn = document.querySelectorAll("button.modal-button");

var modals = document.querySelectorAll('.modal');

var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

let f = new FontFace("Indie Flower", "url(https://fonts.googleapis.com/css2?family=Indie+Flower&family=Shadows+Into+Light&display=swap)");

f.load().then(() => {
  


var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = 'white';
context.lineWidth = 5;
context.beginPath();
context.moveTo(97, canvas.height-100);
context.lineTo(canvas.width-100, canvas.height-100);
context.stroke();
context.beginPath();
context.moveTo(canvas.width-100, canvas.height-100);
context.lineTo(canvas.width-120, canvas.height-120);
context.stroke();
context.stroke();
context.beginPath();
context.moveTo(canvas.width-100, canvas.height-100);
context.lineTo(canvas.width-120, canvas.height-80);
context.stroke();

context.beginPath();
context.moveTo(100, canvas.height-100);
context.lineTo(100, 99);
context.stroke();
context.beginPath();
context.moveTo(100, 100);
context.lineTo(120, 120);
context.stroke();
context.beginPath();
context.moveTo(100, 100);
context.lineTo(80, 120);
context.stroke();

context.font = '30px "Indie Flower"';
context.fillStyle = "white";
context.fillText("Stress", canvas.width/2, canvas.height-60);
context.fillStyle = "white";
context.fillText("Performance", canvas.width/25, 500);

});

const box = document.getElementById('buttonmodal0');
box.style.position = 'absolute';

box.style.top = window.innerHeight-300+'px';
box.style.left = window.innerWidth-900+'px';

const box1 = document.getElementById('buttonmodal1');
box1.style.position = 'absolute';

box1.style.top = window.innerHeight-600+'px';
box1.style.left = window.innerWidth-400+'px';

const box2 = document.getElementById('buttonmodal2');
box2.style.position = 'absolute';

box2.style.top = window.innerHeight-400+'px';
box2.style.left = 200+'px';

const box3 = document.getElementById('buttonmodal3');
box3.style.position = 'absolute';

box3.style.top = window.innerHeight/2-100+'px';;
box3.style.left = window.innerWidth/2-200+'px';

const box4 = document.getElementById('buttonmodal4');
box4.style.position = 'absolute';

box4.style.top = window.innerHeight/2-300+'px';
box4.style.left = window.innerWidth/2+100+'px';



context.lineWidth = 0.2;

var p = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: 0,
  vy: 0
};

render();

function render() {

  var value = getValue(p.x, p.y);
  p.vx += Math.cos(value) * 0.8;
  p.vy += Math.sin(value) * 0.8;

  context.beginPath();
  context.moveTo(p.x, p.y);

  p.x += p.vx;
  p.y += p.vy;
  context.lineTo(p.x, p.y);
  context.stroke();

  p.vx *= 0.99;
  p.vy *= 0.99;

  if(p.x > canvas.width) p.x = 0;
  if(p.y > canvas.height) p.y = 0;
  if(p.x < 0) p.x = canvas.width;
  if(p.y < 0) p.y = canvas.height;

  requestAnimationFrame(render);
}

function getValue(x, y) {
  return (x + y) * 0.001 * Math.PI * 2;
  return (Math.sin(x * 0.01) + Math.sin(y * 0.0001)) * Math.PI * 2;
}
