import {logoutUser} from "./authentification.js";
import {apiCategory} from "./module/callAPI.js";

const modifyButton = document.getElementById("modifyButton");

// Récupérer le token du localStorage
function isUserLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null;
}

export function rebornFormAddPicture(){
    const form = document.querySelector(".addPictureMainBox");
    const img = document.querySelector(".addPictureBox img");

    form.querySelectorAll('*').forEach(child => {
        child.classList.remove('hidden');
    })
    form.reset();
    if (img !== null){
        img.remove();
        console.info("Picture is deleted");
    }
    else {
        console.info("No picture is detected");
    }
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
    async function createSelectCategory(){
        const addPictureCategory = document.getElementById("addPictureCategory");
        const allCategory = await apiCategory();
        allCategory.forEach(category => {
            const option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            addPictureCategory.appendChild(option);
        })
    }
    //Call function
    displayLogged();
    createSelectCategory();


    //Button no function
    logoutUserBtn.addEventListener("click", logoutUser);
    modifyButton.addEventListener("click", () => {
        //Variable
        const modifyPage = document.getElementById("modifyPage");
        const closeModifyPage = document.getElementById("closeModifyPage");
        const addPicture = document.getElementById("addPicture");
        const pageAddPictureButton = document.getElementById("pageAddPictureButton");

        //Action
        modifyPage.showModal();
        console.log('Page de modification ouverte');
        // Button
        closeModifyPage.addEventListener("click", () => {
            modifyPage.close();
        });
        modifyPage.addEventListener('click', (e) => {
            if (e.target === modifyPage) {
                modifyPage.close();
            }
        });
        pageAddPictureButton.addEventListener("click", () => {
            //Variable
            const closeAddPicture = document.getElementById("closeAddPicture");
            const returnAddPicture = document.getElementById("returnAddPicture");
            //Action
            console.log('Page d\'ajout d\'image ouverte');
            addPicture.showModal();
            modifyPage.close();

            // Button
            closeAddPicture.addEventListener("click", () => {
                addPicture.close();
                rebornFormAddPicture();
            });
            returnAddPicture.addEventListener("click", () => {
                addPicture.close();
                rebornFormAddPicture();
                modifyPage.showModal();
            });
        });
    });
    } else {
    console.log('❌ L\'utilisateur n\'est pas connecté');
}

