document.getElementById("playMusic").addEventListener("click", function() {
    document.getElementById("song").play();
    startConfetti();
});

// 🎊 Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 5 + 2,
        d: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
}

function updateConfetti() {
    particles.forEach(p => {
        p.y += p.d;
        if (p.y > canvas.height) p.y = 0;
    });
}

function startConfetti() {
    setInterval(() => {
        drawConfetti();
        updateConfetti();
    }, 30);
}
function openCard() {
    document.querySelector('.card').classList.add('open');
}

function playMusic(event) {
    event.stopPropagation(); // Prevents card from closing when button is clicked
    document.getElementById("song").play();
}
