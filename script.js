// Configuración: 30 días a partir de ahora
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 30);

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar elementos HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Al llegar a cero
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = "<h3>¡ESTAMOS LISTOS!</h3>";
    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown();