document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }

    function checkPasscode() {
        const input = document.getElementById("passcode-input").value;
        if (input.trim() === "21022024") {
            currentPage = 1;
            showPage(currentPage);
            startTimer();
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
    }
    
    // Hide "Next" button if on last page
    if (currentPage === pages.length - 1) {
        document.querySelector(".next-btn").style.display = "none";
    }
}


    document.getElementById("passcode-btn").addEventListener("click", checkPasscode);
    document.querySelectorAll(".next-btn").forEach(button => {
        button.addEventListener("click", nextPage);
    });

    showPage(0); // Show the first page initially

    // Apply styles
    document.body.style.fontFamily = "'Bodoni Moda', serif";
    document.body.style.backgroundColor = "#f8d7da"; // Pastel pink
    document.body.style.color = "#b03a5b"; // Dark pink

    document.querySelectorAll("h1, h2, h3").forEach(el => {
        el.style.color = "#b03a5b";
    });

    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = "#e57373";
        button.style.color = "#fff";
        button.style.border = "none";
        button.style.padding = "10px 20px";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
    });

    document.querySelectorAll(".heart").forEach(heart => {
        heart.style.color = "#ff69b4";
    });
});
function openEnvelope() {
    let envelope = document.getElementById("envelope");
    let letter = document.getElementById("letter");

    // Change envelope to an open state (can modify emoji if needed)
    envelope.innerHTML = "📩";  
    envelope.style.transform = "translateY(-20px) scale(1.2)";

    // Show letter with animation
    setTimeout(() => {
        letter.style.opacity = "1";
        letter.style.transform = "scale(1)";
    }, 500);
}
