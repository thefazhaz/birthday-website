function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "YOUR_ANNIVERSARY_DATE") {
        alert("Access granted! ❤️");
    } else {
        alert("Wrong passcode! Try again.");
    }
}

// Timer Function
function updateTimer() {
    let startDate = new Date("YYYY-MM-DD"); // Replace with your anniversary date
    let now = new Date();
    let difference = now - startDate;
    
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("timeTogether").innerText = `${days} days together 💕`;
}
setInterval(updateTimer, 1000);

// Vinyl Player Functionality
let playing = {};

function togglePlay(index) {
    let vinyl = document.getElementById(`cover${index}`);
    
    if (!playing[index]) {
        vinyl.classList.add("spinning");
        playing[index] = true;
    } else {
        vinyl.classList.remove("spinning");
        playing[index] = false;
    }
}
