document.addEventListener("DOMContentLoaded", () => {
    const takbirAudio = new Audio("https://dl.sndup.net/6h4r/EidTakbir.mp3");
    takbirAudio.loop = true;

    const takbirBtn = document.getElementById("takbirBtn");
    let countdown = 5;
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");

    // Fungsi untuk memperbarui countdown
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

    // Event Listener untuk Tombol Takbir
    takbirBtn.addEventListener("click", async () => {
        try {
            if (takbirAudio.paused) {
                await takbirAudio.play();
                takbirBtn.textContent = "⏸️ Pause Takbir";
            } else {
                takbirAudio.pause();
                takbirBtn.textContent = "▶️ Putar Takbir";
            }
        } catch (error) {
            console.log("Pemutaran audio diblokir oleh browser:", error);
            alert("Silakan tekan tombol untuk memutar audio.");
        }
    });
});
