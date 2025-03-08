document.addEventListener("DOMContentLoaded", function () {
    updateTimer();
    setInterval(updateTimer, 1000);
});

function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "21022024") {
        nextPage(2);
    } else {
        alert("Wrong passcode! Try again.");
    }
}

function updateTimer() {
    const startDate = new Date("February 21, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timeTogether").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById(`page${pageNumber}`).classList.remove("hidden");
}

function openSpotify(songNumber) {
    const songLinks = [
        "https://open.spotify.com/track/4XTgFBxBHN6var1BzAgE1m?si=f5f47696be07408f",
        "https://open.spotify.com/track/2kSb3wYSOV996xA2NSmpck?si=cc8f5d93c8cc45ee",
        "https://open.spotify.com/track/5F79ZdjOwGOhUKRHx94sr1?si=cda416dcbee04662"
    ];
    window.open(songLinks[songNumber - 1], "_blank");
}
