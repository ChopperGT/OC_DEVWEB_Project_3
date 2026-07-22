import {loadProjects} from "./projectBuilder.js";
import {apiAddWork} from "./module/callAPI.js";
import {rebornFormAddPicture} from "./indexModuleAndSystem.js";

let inputFile = false;
const addPictureButton = document.getElementById("addPictureButton");
const inputTitle = document.getElementById("addPictureTitle");
const inputCategory = document.getElementById("addPictureCategory");
const addPictureButtonConfirm = document.getElementById("addPictureButtonConfirm");


async function addWork(addPictureButton) {
    const formData = new FormData();
    formData.append("image", addPictureButton.files[0]);
    formData.append("title", document.getElementById("addPictureTitle").value);
    formData.append("category", document.getElementById("addPictureCategory").value);
    await apiAddWork(formData);
    loadProjects();
}


function buttonPictureConfirm() {
    addPictureButtonConfirm.addEventListener("click", () => {
        addWork(addPictureButton);
        const addPicture = document.getElementById("addPicture");
        addPicture.close();
        rebornFormAddPicture();
        verifyButtonValidateProject();
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
            inputFile = true;
            updateButton();
            return true;
        }
        else {
            console.log("File is depassing the size limit");
            addPictureButton.value = "";
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

    addPictureBox.querySelectorAll('*').forEach(child => {
        child.classList.add('hidden');
    });
    img.src = URL.createObjectURL(pictureChoice);
    addPictureBox.appendChild(img);
}

function verifyButtonValidateProject() {
    // Écouter les changements sur les 3 inputs
    inputTitle.addEventListener("change", updateButton);
    inputCategory.addEventListener("change", updateButton);
}

function updateButton() {
    if (inputFile === true && inputTitle.value.trim() && inputCategory.value) {
        addPictureButtonConfirm.disabled = false;
        console.log("Button enabled");
    } else {
        addPictureButtonConfirm.disabled = true;
    }
}

verifyButtonValidateProject()
checkPicture();
buttonPictureConfirm();