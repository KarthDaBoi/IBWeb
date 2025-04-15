
// Selects the options in the website
function selectGOAT(player) {
    let result = document.getElementById("goat-result");
    if (player === "brady") {
        result.innerHTML = "🏆 Tom Brady: 7x Super Bowl Champion!";
    } else {
        result.innerHTML = "🔥 Patrick Mahomes: The Future of the NFL!";
    }
}

// Functionality for when the user types in the information in the contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("form-message");
    
    if (name.trim() === "" || email.trim() === "") {
        message.innerHTML = "❌ Please fill in all fields.";
        message.style.color = "red";
    } else {
        message.innerHTML = "✅ Thanks for reaching out, " + name + "!";
        message.style.color = "green";
    }
});

// Changes the website between dark mode and light mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let modeText = document.getElementById("mode-text");
    if (document.body.classList.contains("dark-mode")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
}  

/* Stores the saved dark/light mode setting for the user

    - Next time they log on to the website, the data is saved and their set color mode will appear
*/
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Check local storage for saved mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Update button text based on mode
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Light Mode";
            localStorage.setItem("dark-mode", "enabled"); // Save preference
        } else {
            toggleButton.textContent = "Dark Mode";
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
