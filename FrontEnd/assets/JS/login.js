// login.js
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

    try {
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        // Si l'API renvoie une erreur HTTP (401, 404...)
        if (!response.ok) {
            errorMessage.textContent = "Email ou mot de passe incorrect.";
            return;
        }

        const data = await response.json();

        // On stocke le token pour les futures requêtes protégées
        localStorage.setItem("token", data.token);

        // Redirection en cas de succès
        window.location.href = "../../index.html";
    } catch (error) {
        // Erreur réseau (serveur éteint, CORS, etc.)
        errorMessage.textContent = "Erreur serveur, réessaie plus tard.";
        console.error(error);


    }

});