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

    // 💖 Envelope Animation for Page 3 💌
    const envelope = document.getElementById("envelope");
    const loveLetter = document.getElementById("love-letter");

    if (envelope && loveLetter) {
        loveLetter.style.display = "none";
        envelope.addEventListener("click", function () {
            envelope.style.display = "none"; // Hide envelope
            loveLetter.style.display = "block"; // Show love letter
        });
    }

    // 🎵 Vinyl Player for Last Page
    const songs = [
        { title: "Song 1", link: "https://youtu.be/-2RAq5o5pwc?si=NVCzWvxwoUjKMTRO" },
        { title: "Song 2", link: "https://youtu.be/_QGIzmtIr3E?si=xhfcjyEh-OuQohd6" },
        { title: "Song 3", link: "https://youtu.be/7z3YeFqd7xQ?si=DfWtwsXYEEarjJyL" },
        { title: "Song 4", link: "https://youtu.be/MYvjW3zdCws?si=VVF-PL8dikoTlJdj" }
    ];

    const vinylContainer = document.getElementById("vinyl-container");
    if (vinylContainer) {
        vinylContainer.innerHTML = songs.map((song, index) => `
            <div class="vinyl-wrapper">
                <div class="vinyl" id="vinyl${index}"></div>
                <p>${song.title}</p>
                <a href="${song.link}" target="_blank">Play Song</a>
            </div>
        `).join("");

        document.querySelectorAll(".vinyl").forEach(vinyl => {
            vinyl.style.animation = "spin 5s linear infinite";
        });
    }

    // ❌ Remove "Next" Button on Last Page
    const lastNextButton = document.getElementById("last-next-btn");
    if (lastNextButton) lastNextButton.style.display = "none";

    // 🔄 Add Spinning Animation for Vinyls
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});

