function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "your_anniversary_date") {
        alert("Correct! Welcome, my love!");
    } else {
        alert("Oops! Try again.");
    }
}

function updateTimer() {
    const startDate = new Date("YYYY-MM-DD"); // Replace with your date
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("timeTogether").innerText = days + " days together!";
}

setInterval(updateTimer, 1000);

const audioPlayers = [
    new Audio("song1.mp3"),
    new Audio("song2.mp3"),
    new Audio("song3.mp3")
];

function togglePlay(index) {
    const vinyl = document.getElementById("vinyl" + index);
    if (audioPlayers[index - 1].paused) {
        audioPlayers.forEach(audio => audio.pause());
        audioPlayers[index - 1].play();
        document.querySelectorAll(".vinyl").forEach(v => v.classList.remove("playing"));
        vinyl.classList.add("playing");
    } else {
        audioPlayers[index - 1].pause();
        vinyl.classList.remove("playing");
    }
}
