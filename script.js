document.addEventListener("DOMContentLoaded", () => {
    const takbirAudio = document.getElementById("takbirAudio");
    const takbirBtn = document.getElementById("takbirBtn");
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");
    let countdown = 5;

    function updateCountdown() {
        if (countdown > 0) {
            countdownElement.textContent = countdown;
            countdown--;
            setTimeout(updateCountdown, 1000);
        } else {
            messageElement.innerHTML = "🎉 Dosa-dosa lama telah dihapus! 🎉<br>Menjalankan update ke versi lebih baik...<br><strong>Selamat Idul Fitri!</strong>";
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
});
