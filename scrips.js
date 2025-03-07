const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

const fechaFiesta = new Date('2025-03-22T13:30:00');

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaFiesta - ahora;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  diasElement.textContent = dias.toString().padStart(2, '0');
  horasElement.textContent = horas.toString().padStart(2, '0');
  minutosElement.textContent = minutos.toString().padStart(2, '0');
  segundosElement.textContent = segundos.toString().padStart(2, '0');
}

window.onload = function() {
  setInterval(actualizarContador, 1000); // Call actualizarContador every 1 second
};

const sections = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("audio").play();
});