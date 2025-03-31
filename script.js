document.addEventListener("DOMContentLoaded", () => {
    const backgroundTakbir = new Audio("https://archive.org/download/takbir_20250331/takbir.mp3");
    backgroundTakbir.loop = true;

    const takbirBtn = document.getElementById("takbirBtn");

    takbirBtn.addEventListener("click", () => {
        if (backgroundTakbir.paused) {
            backgroundTakbir.play();
            takbirBtn.textContent = "⏸️ Pause Takbir";
        } else {
            backgroundTakbir.pause();
            takbirBtn.textContent = "▶️ Putar Takbir";
        }
    });
});
