function checkPasscode() {
    const input = document.getElementById('passcodeInput').value;
    if (input === "21022024") { 
        showPage('timerPage');
    } else {
        alert("Wrong passcode! Try again 💕");
    }
}

function showPage(pageId) {
    document.getElementById("passcodePage").style.display = "none";
    document.getElementById("timerPage").style.display = "none";
    document.getElementById("envelopePage").style.display = "none";
    document.getElementById("songsPage").style.display = "none";
    document.getElementById(pageId).style.display = "block";
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

function revealMessage() {
    document.getElementById("loveMessage").style.display = "block";
    document.getElementById("toSongsPage").style.display = "block";
}

function playSong(songId) {
    let song = document.getElementById(songId);
    song.play();
}
