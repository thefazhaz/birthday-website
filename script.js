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

    updateTimeTogether();
    setInterval(updateTimeTogether, 1000); // Update every second
});

function updateTimeTogether() {
    let startDate = new Date(2024, 1, 21); // 21 Feb 2024 (Months are 0-based, so 1 = February)
    let now = new Date();
    
    let difference = now - startDate;
    
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);
    
    document.getElementById("timeTogether").innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds together 💕`;
}


function togglePlay(songNumber) {
    alert(`Playing song ${songNumber} 🎵`);
}
