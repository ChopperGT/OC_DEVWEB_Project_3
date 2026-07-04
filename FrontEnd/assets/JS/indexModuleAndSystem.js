export const modifyButton = document.getElementById("modifyButton");

// Récupérer le token du localStorage
function isUserLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null; // true si connecté, false sinon
}

// Utiliser cette fonction
if (isUserLoggedIn()) {
    console.log('✅ L\'utilisateur est connecté');
    //Create variable
    const editorOn = document.getElementById("editorOn");
    const login = document.getElementById("login");
    const logout = document.getElementById("logout");
    const logoutUserBtn = document.getElementById("logoutUser");
    const boxButtonFiltre = document.getElementById("boxButtonFiltre");

    //Function
    function displayLogged(){
        editorOn.style.display = "block";
        login.style.display = "none";
        logout.style.display = "block";
        login.style.display = "none";
        boxButtonFiltre.style.display = "none";
        modifyButton.style.display = "block";
    }
    function logoutUser() {
        localStorage.removeItem('token');
        window.location.href = "../../index.html";
        console.log('User logged out');
    }

    //Call function
    displayLogged();
    logoutUserBtn.addEventListener("click", logoutUser);

    //Button no function
    modifyButton.addEventListener("click", () => {
        //Variable
        const modifyPage = document.getElementById("modifyPage");
        const closeModifyPage = document.getElementById("closeModifyPage");
        const addPicture = document.getElementById("addPicture");


        //Action
        modifyPage.style.display = "block";


        console.log('Page de modification ouverte');
        // Button
        closeModifyPage.addEventListener("click", () => {
            modifyPage.style.display = "none";
        });
        closeModifyPage.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
        pageAddPictureButton.addEventListener("click", () => {
            //Variable
            const closeAddPicture = document.getElementById("closeAddPicture");
            const returnAddPicture = document.getElementById("returnAddPicture");
            //Action
            console.log('Page d\'ajout d\'image ouverte');
            addPicture.style.display = "block";
            modifyPage.style.display = "none";

            // Button
            closeAddPicture.addEventListener("click", () => {
                addPicture.style.display = "none";
            });
            returnAddPicture.addEventListener("click", () => {
                addPicture.style.display = "none";
                modifyPage.style.display = "block";
            });
        });
    });

} else {
    console.log('❌ L\'utilisateur n\'est pas connecté');
}
