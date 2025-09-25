particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",   // 👈 penting biar event mouse dibaca di canvas
    "events": {
      "onhover": { "enable": true, "mode": "grab" },   // 👈 interaksi saat hover
      "onclick": { "enable": true, "mode": "repulse" },// 👈 interaksi saat klik
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": { "opacity": 1 }
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});


const hello = document.getElementById("hello");

// Languages for Hello animation
const hellos = [
  "Hello", "Bonjour", "Hola", "Ciao", "Hallo",
  "こんにちは", "안녕하세요", "你好", "Привет", "مرحبا"
];

let index = 0;

function changeHello() {
  hello.textContent = hellos[index];
  index = (index + 1) % hellos.length;
}

// Initialize and loop every 6s
changeHello();
setInterval(changeHello, 6000);
