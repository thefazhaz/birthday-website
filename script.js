document.addEventListener("DOMContentLoaded", function () {
    startTimer("2024-02-21");
});

function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "21022024") {
        nextPage(2);
    } else {
        document.getElementById("error-message").innerText = "Wrong passcode!";
    }
}

function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById(`page${pageNumber}`).classList.remove("hidden");
}

function startTimer(startDate) {
    let startTime = new Date(startDate).getTime();
    setInterval(function () {
        let now = new Date().getTime();
        let distance = now - startTime;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timeTogether").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}
