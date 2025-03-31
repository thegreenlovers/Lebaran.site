// Hitungan mundur sebelum pesan berubah
let countdown = 5;
let countdownElement = document.getElementById("countdown");
let messageElement = document.getElementById("message");

function updateCountdown() {
    if (countdown > 0) {
        countdownElement.textContent = countdown;
        countdown--;
        setTimeout(updateCountdown, 1000);
    } else {
        messageElement.innerHTML = "🎉 Dosa-dosa lama telah dihapus! 🎉<br>Menjalankan update ke versi lebih baik...<br><strong class='glow'>Selamat Idul Fitri!</strong>";
    }
}
updateCountdown();

// Audio Takbir
const takbirAudio = new Audio("https://www.islamiclyrics.net/wp-content/uploads/2015/09/Takbir-Eid.mp3");
takbirAudio.crossOrigin = "anonymous";

const takbirBtn = document.getElementById("takbirBtn");
takbirBtn.addEventListener("click", () => {
    if (takbirAudio.paused) {
        takbirAudio.play().catch(error => alert("Silakan klik tombol Play untuk memutar audio."));
        takbirBtn.textContent = "⏸️ Stop Takbir";
    } else {
        takbirAudio.pause();
        takbirBtn.textContent = "▶️ Putar Takbir";
    }
});

// Efek Partikel
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 80%)`
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();
