document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleTheme");
    const body = document.body;

    // Verifica se já há um tema salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    button.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Salva a escolha no localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
