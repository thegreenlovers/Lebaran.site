// Hitungan mundur sebelum ucapan muncul
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

// Efek Karakter Melambaikan Tangan
document.getElementById("character").addEventListener("click", function() {
    this.classList.add("wave");
    setTimeout(() => {
        this.classList.remove("wave");
    }, 3000);
});

// Efek Partikel (Bintang Berjatuhan)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
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

// Resize Canvas saat Layar Diubah
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Tombol Takbiran
const takbirAudio = document.getElementById("takbirAudio");
const takbirBtn = document.getElementById("takbirBtn");

takbirBtn.addEventListener("click", () => {
    if (takbirAudio.paused) {
        takbirAudio.play();
        takbirBtn.textContent = "⏸️ Stop Takbir";
    } else {
        takbirAudio.pause();
        takbirBtn.textContent = "▶️ Putar Takbir";
    }
});

// Efek "Tebarkan Salam!" di Klik
document.body.addEventListener("click", (e) => {
    let salam = document.createElement("div");
    salam.className = "salam";
    salam.textContent = "Tebarkan Salam!";
    salam.style.left = `${e.clientX}px`;
    salam.style.top = `${e.clientY}px`;
    document.body.appendChild(salam);
    setTimeout(() => salam.remove(), 3000);
});
