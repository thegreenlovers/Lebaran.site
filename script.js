document.addEventListener("DOMContentLoaded", () => {
    const backgroundTakbir = new Audio("https://docs.google.com/uc?export=download&id=1zCnA2U8OkSQxmj5JtJQlM1AR6r2oZUIQ");
    backgroundTakbir.loop = true;
    backgroundTakbir.play().catch(() => console.log("Autoplay tidak didukung, pengguna harus menekan tombol"));

    let countdown = 5;
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");
    const takbirBtn = document.getElementById("takbirBtn");

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
        if (backgroundTakbir.paused) {
            backgroundTakbir.play();
        } else {
            backgroundTakbir.pause();
        }
    });
});
