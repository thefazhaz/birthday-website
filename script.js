// PASSWORD CHECK FUNCTION
function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "21022024") { 
        showPage(2);
    } else {
        alert("Wrong password! Try again.");
    }
}

// TIMER FUNCTION (Page 2)
function updateTimer() {
    const startDate = new Date("February 21, 2024 00:00:00");
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("timeTogether").innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    setTimeout(updateTimer, 1000);
}

// FUNCTION TO SHOW SPECIFIC PAGES
function showPage(pageNumber) {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.add("hidden");

    document.getElementById("page" + pageNumber).classList.remove("hidden");

    if (pageNumber === 2) {
        updateTimer(); // Start timer only on Page 2
    }
}

// FUNCTION TO OPEN MESSAGE ON ENVELOPE PAGE
function openMessage() {
    document.getElementById("message").classList.remove("hidden");
}
