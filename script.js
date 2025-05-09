// Event Handling
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("displayText").textContent = "You clicked the button!";
});

// Hover Effects
document.getElementById("changeTextBtn").addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightblue";
});
document.getElementById("changeTextBtn").addEventListener("mouseleave", function () {
    this.style.backgroundColor = "";
});

// Keypress Detection
document.addEventListener("keypress", function (event) {
    console.log("Key pressed:", event.key);
});

// Form Validation
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email!");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return;
    }

    alert("Form submitted successfully!");
});

// Bonus: Double Click Action
document.getElementById("changeTextBtn").addEventListener("dblclick", function () {
    alert("Double-click surprise!");
});
