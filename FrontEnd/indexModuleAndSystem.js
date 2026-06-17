

// Login //

// Récupérer le token du localStorage
function isUserLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null; // true si connecté, false sinon
}

// Utiliser cette fonction
if (isUserLoggedIn()) {
    console.log('✅ L\'utilisateur est connecté');
    let editorOn = document.getElementById("editorOn");
    editorOn.style.display = "block";
    let login = document.getElementById("login");
    let logout = document.getElementById("logout");
    let logoutUserBtn = document.getElementById("logoutUser");
    logoutUserBtn.addEventListener("click", logoutUser);
    login.style.display = "none";
    logout.style.display = "block";
    let boxButtonFiltre = document.getElementById("boxButtonFiltre");
    boxButtonFiltre.style.display = "none";
    const modifyButton = document.getElementById("modifyButton");
    modifyButton.style.display = "block";
    const modifyPage = document.getElementById("modifyPage");
    const closeModifyPage = document.getElementById("closeModifyPage");
    modifyButton.addEventListener("click", () => {
        modifyPage.style.display = "block";
    });
    closeModifyPage.addEventListener("click", () => {
        modifyPage.style.display = "none";
    });
    // Fermer en cliquant sur le fond
    closeModifyPage.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    //addPicture
    const addPicture = document.getElementById("addPicture");
    const addPictureButton = document .getElementById("addPictureButton");
    addPictureButton.addEventListener("click", () => {
        addPicture.style.display = "block";
        modifyPage.style.display = "none";
    });
    const closeAddPicture = document.getElementById("closeAddPicture");
    closeAddPicture.addEventListener("click", () => {
        addPicture.style.display = "none";
    });
    const returnAddPicture = document.getElementById("returnAddPicture");
    returnAddPicture.addEventListener("click", () => {
        addPicture.style.display = "none";
        modifyPage.style.display = "block";
    });
} else {
    console.log('❌ L\'utilisateur n\'est pas connecté');
}

// Logout //
function logoutUser() {
    localStorage.removeItem('token');
    window.location.href = "./index.html";
    console.log('User logged out');
}
