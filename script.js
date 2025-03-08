// Check Passcode
function checkPasscode() {
    let passcode = document.getElementById('passcodeInput').value;
    if (passcode === "21022024") {
        nextPage('timerPage');
        startTimer();
    } else {
        alert("Wrong passcode! Try again.");
    }
}

// Navigate Pages
function nextPage(pageId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(pageId).classList.remove("hidden");
}

// Timer Function
function startTimer() {
    let startDate = new Date("2024-02-21T00:00:00");
    setInterval(() => {
        let now = new Date();
        let difference = now - startDate;
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);
        document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Envelope Reveal
function revealMessage() {
    document.getElementById('loveMessage').classList.remove("hidden");
    document.getElementById('nextToSongs').classList.remove("hidden");
    document.getElementById('revealButton').style.display = "none";
}
