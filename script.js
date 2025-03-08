document.addEventListener("DOMContentLoaded", function () {
    calculateTimeTogether();
});

function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function checkPassword() {
    let passwordInput = document.getElementById("password").value;
    let correctPassword = "21022024"; // 21 Feb 2024 in DDMMYYYY

    if (passwordInput === correctPassword) {
        alert("Correct! Welcome, my love! 💖");
    } else {
        alert("Oops! Try again! 💔");
    }
}

function calculateTimeTogether() {
    let startDate = new Date(2024, 1, 21); // 21 Feb 2024
    let now = new Date();
    
    let difference = now - startDate;
    let daysTogether = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    document.getElementById("timeTogether").innerHTML = `${daysTogether} days together 💕`;
}

function togglePlay(songNumber) {
    alert(`Playing song ${songNumber} 🎵`);
}
