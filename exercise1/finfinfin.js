document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("welcomeBtn");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const age = Number(ageInput.value);

        if (!age) {
            message.textContent = "Please enter a valid age";
            return;
        }

        if (age < 18) {
            message.textContent = "You are not allowed in this class";
        } else {
            message.textContent = "Welcome, " + name + "!";
        }
    });
});