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

    // Love Letter Envelope Animation
    const envelope = document.getElementById("envelope");
    const loveLetter = document.getElementById("love-letter");

    if (envelope) {
        envelope.addEventListener("click", function () {
            envelope.style.display = "none";
            loveLetter.style.display = "block";
        });
    }

    // Vinyl player for songs
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

    // Hide the next button on the last page
    document.getElementById("last-next-btn").style.display = "none";
});
