// Memastikan audio bisa diputar
const takbirAudio = new Audio("https://www.islamiclyrics.net/wp-content/uploads/2015/09/Takbir-Eid.mp3");
takbirAudio.crossOrigin = "anonymous";
takbirAudio.preload = "auto";

const takbirBtn = document.getElementById("takbirBtn");

takbirBtn.addEventListener("click", () => {
    if (takbirAudio.paused) {
        takbirAudio.play().catch(error => {
            alert("Silakan klik tombol Play untuk memutar audio.");
        });
        takbirBtn.textContent = "⏸️ Stop Takbir";
    } else {
        takbirAudio.pause();
        takbirBtn.textContent = "▶️ Putar Takbir";
    }
});
