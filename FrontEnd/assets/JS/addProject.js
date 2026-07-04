const API_URL = 'http://localhost:5678';
import {loadProjects} from "./projectBuilder.js";


async function addWork(addPictureButton) {
    const formData = new FormData();
    // AJOUTER LES DONNEES DANS LE FORMDATA
    formData.append("image", addPictureButton.files[0]);
    formData.append("title", document.getElementById("addPictureTitle").value);
    formData.append("category", document.getElementById("addPictureCategory").value);
    const token = localStorage.getItem('token')
    const newWork = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData
    })
    loadProjects();
}


function buttonPictureConfirm() {
    const addPictureButtonConfirm = document.querySelector(".addPictureButtonConfirm");
    const addPictureButton = document.getElementById("addPictureButton");
    addPictureButtonConfirm.addEventListener("click", () => {
        addWork(addPictureButton);
    })
}



function checkPicture() {
    const addPictureButton = document.getElementById("addPictureButton");
    addPictureButton.addEventListener("change", () => {
        if (addPictureButton.files.length > 0) {
            console.log("File detected");
            verifyPicture(addPictureButton);
            if (verifyPicture(addPictureButton) === true) {
                console.log("File is allowed");
                viewPictureChoice(addPictureButton);
                return addPictureButton.files[0];
            }
        } else {
            console.log("No file no gain");
        }
    })
}

function verifyPicture(addPictureButton){
    const maxSize = 4 * 1024 * 1024; // 4MB
    const typesAllowed = ['image/jpeg', 'image/png', 'image/webp'];

    if (typesAllowed.includes(addPictureButton.files[0].type)) {
        console.log("File is allowed");
        if (maxSize >= addPictureButton.files[0].size) {
            console.log("File is not depassing the size limit");
            return true;
        }
        else {
            console.log("File is depassing the size limit");
            return false;
        }
    }
    else {
        console.log("File is not allowed");
        return false;
    }

}

function viewPictureChoice(addPictureButton) {
    const addPictureBox = document.querySelector(".addPictureBox");
    const pictureChoice = addPictureButton.files[0];
    const img = document.createElement("img");

    addPictureBox.innerHTML ='';
    img.src = URL.createObjectURL(pictureChoice);
    addPictureBox.appendChild(img);
}


checkPicture();
buttonPictureConfirm();