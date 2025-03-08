// Check Passcode
function checkPasscode() {
    let passcode = document.getElementById('passcodeInput').value;
    if (passcode === "yourPasscode") {  // Change this to the actual passcode
        nextPage('timerPage');
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
    let startDate = new Date("YYYY-MM-DD"); // Change this to your actual anniversary date
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
}
