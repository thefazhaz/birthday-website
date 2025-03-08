function checkPasscode() {
    const input = document.getElementById('passcodeInput').value;
    if (input === "21022024") { 
        window.location.href = "timer.html";
    } else {
        alert("Wrong passcode! Try again 💕");
    }
}

function nextPage(page) {
    window.location.href = page;
}

function startTimer() {
    const startDate = new Date("2024-02-21T00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = `${days} days ${hours} hrs ${minutes} min ${seconds} sec 💕`;
    }, 1000);
}

function playSong(songId) {
    document.getElementById(songId).play();
}
