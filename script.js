document.addEventListener("DOMContentLoaded", function () {
    calculateTimeTogether();
});

function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function checkPassword() {
    let passwordInput = document.getElementById("password").value;
    let correctPassword = "21022024"; // Your anniversary in DDMMYYYY format

    if (passwordInput === correctPassword) {
        alert("Correct! Welcome, my love! 💖");
    } else {
        alert("Oops! Try again! 💔");
    }
}

function calculateTimeTogether() {
    let startDate = "21022024"; // Your anniversary date in DDMMYYYY format
    let formattedDate = startDate.substring(4, 8) + "-" + startDate.substring(2, 4) + "-" + startDate.substring(0, 2);
    
    let start = new Date(formattedDate);
    let now = new Date();
    
    if (!isNaN(start.getTime())) {
        let difference = now - start;
        let daysTogether = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById("timeTogether").innerHTML = `${daysTogether} days together 💕`;
    } else {
        document.getElementById("timeTogether").innerHTML = "Error in date calculation!";
    }
}

function togglePlay(songNumber) {
    alert(`Playing song ${songNumber} 🎵`);
}
