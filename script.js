document.addEventListener("DOMContentLoaded", function () {
    calculateTimeTogether();
});

// 🎁 Opens the birthday message
function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}

// 🔐 Checks the passcode
function checkPassword() {
    let passwordInput = document.getElementById("password").value;
    let correctPassword = "21022024"; // 21st Feb 2024 in DDMMYYYY

    if (passwordInput === correctPassword) {
        alert("Correct! Welcome, my love! 💖");
    } else {
        alert("Oops! Try again! 💔");
    }
}

// ⏳ Calculates how long you've been together
function calculateTimeTogether() {
    let startDate = new Date(2024, 1, 21); // 21 Feb 2024
    let now = new Date();
    
    let difference = now - startDate;
    let daysTogether = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    document.getElementById("timeTogether").innerHTML = `${daysTogether} days together 💕`;
}

// 🎶 Plays songs when you click the vinyl
function togglePlay(songNumber) {
    alert(`Playing song ${songNumber} 🎵`);
}
