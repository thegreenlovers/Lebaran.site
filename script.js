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
