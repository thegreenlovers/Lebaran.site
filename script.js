document.addEventListener("DOMContentLoaded", () => {
    const takbirAudio = document.getElementById("takbirAudio");
    const takbirBtn = document.getElementById("takbirBtn");
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");
    const starContainer = document.getElementById("stars");
    let countdown = 5;

    function updateCountdown() {
        if (countdown > 0) {
            countdownElement.textContent = countdown;
            countdownElement.classList.add("shake");
            setTimeout(() => countdownElement.classList.remove("shake"), 500);
            countdown--;
            setTimeout(updateCountdown, 1000);
        } else {
            messageElement.innerHTML = "🎉 Dosa-dosa lama telah dihapus! 🎉<br>Menjalankan update ke versi lebih baik...<br><strong class='blink'>Selamat Idul Fitri!</strong>";
            messageElement.classList.add("fade-in");
        }
    }
    updateCountdown();

    takbirBtn.addEventListener("click", () => {
        if (takbirAudio.paused) {
            takbirAudio.play().catch(error => console.log("Autoplay tidak diizinkan, tekan tombol untuk memulai."));
            takbirBtn.textContent = "⏸️ Jeda Takbir";
        } else {
            takbirAudio.pause();
            takbirBtn.textContent = "▶️ Putar Takbir";
        }
    });

    function createStars() {
        for (let i = 0; i < 100; i++) {
            let star = document.createElement("div");
            star.className = "star";
            star.style.top = Math.random() * 100 + "vh";
            star.style.left = Math.random() * 100 + "vw";
            star.style.animationDuration = Math.random() * 3 + 2 + "s";
            starContainer.appendChild(star);
        }
    }
    createStars();
});
