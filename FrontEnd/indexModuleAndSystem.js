

// Login //

// Récupérer le token du localStorage
function isUserLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null; // true si connecté, false sinon
}

// Utiliser cette fonction
if (isUserLoggedIn()) {
    console.log('✅ L\'utilisateur est connecté');
    let login = document.getElementById("login");
    let logout = document.getElementById("logout");
    let logoutUserBtn = document.getElementById("logoutUser");
    logoutUserBtn.addEventListener("click", logoutUser);
    login.style.display = "none";
    logout.style.display = "block";


} else {
    console.log('❌ L\'utilisateur n\'est pas connecté');
}

// Logout //
function logoutUser() {
    localStorage.removeItem('token');
    window.location.href = "./index.html";
    console.log('User logged out');
}

