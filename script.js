document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }

    function checkPasscode() {
        const input = document.getElementById("passcode-input").value.trim();
        if (input === "21022024") {
            document.getElementById("passcode-error").textContent = "";
            nextPage();
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

    function nextPage() {
        currentPage++;
        if (currentPage < pages.length) {
            showPage(currentPage);
            if (currentPage === 1) startTimer(); // Start timer on second page
        }
    }

    document.getElementById("enter-btn").addEventListener("click", checkPasscode);
    showPage(0); // Show only the first page initially
});
