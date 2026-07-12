export const modifyButton = document.getElementById("modifyButton");
import {logoutUser} from "./authentification.js";

// Récupérer le token du localStorage
function isUserLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null; // true si connecté, false sinon
}
function rebornButtonAddPicture() {
    const addPictureBox = document.querySelector(".addPictureBox");
    const iconAddPicture = document.createElement("i");
    const inputAddPicture = document.createElement("input");
    const labelAddPicture = document.createElement("label");
    const textAddPicture = document.createElement("p");
    const addPictureButton = document.getElementById("addPictureButton");
    localStorage.getItem('image');
    console.log(localStorage.getItem('image'));
    localStorage.removeItem('image');
    iconAddPicture.classList = ("fa-solid", "fa-image");
    iconAddPicture.classList.add("fa-solid", "fa-image");
    inputAddPicture.type = "file";
    inputAddPicture.accept = "image/png, image/jpeg,image/jpg, image/webp";
    inputAddPicture.name = "image";
    inputAddPicture.id = "addPictureButton";
    inputAddPicture.classList= ("addPictureButton");
    labelAddPicture.htmlFor = "addPictureButton";
    labelAddPicture.classList = ("addPictureButtonCustom");
    labelAddPicture.textContent = "+ Ajouter photo";
    textAddPicture.textContent = "jpg, png: 4mo max";
    addPictureBox.innerHTML = '';
    addPictureBox.appendChild(iconAddPicture);
    addPictureBox.appendChild(inputAddPicture);
    addPictureBox.appendChild(labelAddPicture);
    addPictureBox.appendChild(textAddPicture);
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

    //Call function
    displayLogged();
    logoutUserBtn.addEventListener("click", logoutUser);

    //Button no function
    modifyButton.addEventListener("click", () => {
        //Variable
        const modifyPage = document.getElementById("modifyPage");
        const closeModifyPage = document.getElementById("closeModifyPage");
        const addPicture = document.getElementById("addPicture");
        const pageAddPictureButton = document.getElementById("pageAddPictureButton");

        //Action
        modifyPage.style.display = "block";


        console.log('Page de modification ouverte');
        // Button
        closeModifyPage.addEventListener("click", () => {
            modifyPage.style.display = "none";
        });
        modifyPage.addEventListener('click', (e) => {
            if (e.target === modifyPage) {
                modifyPage.style.display = "none";
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
                rebornButtonAddPicture();
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
