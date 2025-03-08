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
    }

    document.getElementById("passcode-btn").addEventListener("click", checkPasscode);
    document.querySelectorAll(".next-btn").forEach(button => {
        button.addEventListener("click", nextPage);
    });

    showPage(0);

    // Apply styles
    document.body.style.fontFamily = "'Bodoni Moda', serif";
    document.body.style.backgroundColor = "#f8d7da";
    document.body.style.color = "#b03a5b";
    document.body.style.textAlign = "center";

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

    // Love Letter Envelope Animation (Only for Page 3)
    const envelope = document.getElementById("envelope");
    const loveLetter = document.getElementById("love-letter");
    if (envelope && loveLetter) {
        loveLetter.style.display = "none";
        envelope.addEventListener("click", function () {
            this.style.display = "none";
            loveLetter.style.display = "block";
        });
    }

    // Vinyl player for the last page
    const songs = [
        { title: "Song 1", link: "https://youtu.be/-2RAq5o5pwc?si=NVCzWvxwoUjKMTRO" },
        { title: "Song 2", link: "https://youtu.be/_QGIzmtIr3E?si=xhfcjyEh-OuQohd6" },
        { title: "Song 3", link: "https://youtu.be/7z3YeFqd7xQ?si=DfWtwsXYEEarjJyL" },
        { title: "Song 4", link: "https://youtu.be/MYvjW3zdCws?si=VVF-PL8dikoTlJdj" }
    ];

    const vinylContainer = document.getElementById("vinyl-container");
    vinylContainer.innerHTML = songs.map((song, index) => `
        <div class="vinyl-wrapper">
            <div class="vinyl" id="vinyl${index}"></div>
            <p>${song.title}</p>
            <a href="${song.link}" target="_blank">Play Song</a>
        </div>
    `).join("\n");

    document.querySelectorAll(".vinyl-wrapper").forEach(wrapper => {
        wrapper.style.textAlign = "center";
        wrapper.style.margin = "20px auto";
    });

    document.querySelectorAll(".vinyl").forEach(vinyl => {
        vinyl.style.width = "150px";
        vinyl.style.height = "150px";
        vinyl.style.borderRadius = "50%";
        vinyl.style.backgroundColor = "black";
        vinyl.style.border = "5px solid #ff69b4";
        vinyl.style.animation = "spin 5s linear infinite";
    });

    // Remove the next button on the last page
    const lastNextButton = document.querySelector("#last-next-btn");
    if (lastNextButton) {
        lastNextButton.style.display = "none";
    }

    // Add spinning animation
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});
