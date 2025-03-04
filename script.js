function checkPassword() {
    let enteredPassword = document.getElementById("password").value;
    let correctPassword = "15062023"; // Change this to your actual anniversary date

    if (enteredPassword === correctPassword) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}
function updateTimer() {
    let startDate = new Date("2023-06-15"); // Change this to the exact date you started talking
    let now = new Date();
    let difference = now - startDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("timer").innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    setTimeout(updateTimer, 1000); // Update every second
}

updateTimer();
