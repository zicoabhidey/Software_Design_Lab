const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#fff';
context.lineWidth = 5;
context.beginPath();
context.moveTo(100, canvas.height-100);
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
context.lineTo(100, 100);
context.stroke();
context.beginPath();
context.moveTo(100, 100);
context.lineTo(120, 120);
context.stroke();
context.beginPath();
context.moveTo(100, 100);
context.lineTo(80, 120);
context.stroke();

context.font = '30px serif';
context.fillStyle = "white";
context.fillText("Stress", canvas.width/2, canvas.height-60);
context.fillStyle = "white";
context.fillText("Performance", canvas.width/25, 500);





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

const box = document.getElementById('0');
box.style.position = 'absolute';

box.style.top = window.innerHeight-300+'px';
box.style.left = window.innerWidth-300+'px';



