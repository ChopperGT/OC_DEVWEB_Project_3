import {apiLogin} from "./module/callAPI.js";
const formLogin = document.querySelector("#loginForm");

function loginUser(){
    const form = document.querySelector("#loginForm");
    const emailInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const errorMessage = document.querySelector("#loginError");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Nettoie l'ancien message d'erreur
        errorMessage.textContent = "";

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Vérification simple côté front
        if (!email || !password) {
            errorMessage.textContent = "Veuillez remplir tous les champs.";
            return;
        }
        else {
            const data = await apiLogin(email, password);
            localStorage.setItem("token", data.token);

            // Redirection en cas de succès
            window.location.href = new URL("index.html", window.location.href).href;
        }
    });
}

export function logoutUser() {
    localStorage.removeItem('token');
    window.location.href = new URL("index.html", window.location.href).href;
    console.log('User logged out');
}

if (formLogin) {
    loginUser();
} else {
    console.info("Form to login not found")
}