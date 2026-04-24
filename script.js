let themebtn = document.getElementById("themebtn");

if (themebtn) {
    themebtn.textContent = "🌙";
    themebtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themebtn.textContent = "☀️";
        } else {
            themebtn.textContent = "🌙";
        }
    });
}