document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.toggle("active", i === index);
        });
    }

    function checkPasscode() {
        const input = document.getElementById("passcode-input").value;
        if (input.trim().toLowerCase() === "february 21 2024") {
            showPage(1);
        } else {
            document.getElementById("passcode-error").textContent = "Incorrect passcode. Try again.";
        }
    }

    function startTimer() {
        const startDate = new Date("February 21, 2024").getTime();
        setInterval(() => {
            const now = new Date().getTime();
            const difference = now - startDate;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            document.getElementById("timer").textContent = `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`;
        }, 1000);
    }

    function nextPage(index) {
        showPage(index + 1);
    }

    window.checkPasscode = checkPasscode;
    window.nextPage = nextPage;
    showPage(0);
    startTimer();
});
