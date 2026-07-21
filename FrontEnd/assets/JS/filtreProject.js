import {displayProjects, loadProjects} from "./projectBuilder.js";
import {apiCategory, apiWork} from "./module/callAPI.js";





async function displayFilter(){
    const allCategories = await apiCategory();
    allCategories.unshift({id: 0, name: "Tous"});
    allCategories.forEach(category => {
        createButtonCategory(category);
    })
}

async function createButtonCategory(category) {
    const button = document.createElement("button");
    button.classList.add("button", "filtre");
    button.innerHTML = category.name;
    button.dataset.category = category.id;
    button.type = "button";
    document.getElementById("boxButtonFiltre").appendChild(button);
    button.addEventListener("click", buttonActiveFiltre)
    if (category.id === 0) {
        button.classList.add("active");
    }
    return button;
}


async function buttonActiveFiltre(e) {
    document.querySelectorAll(".filtre").forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");

    const categoryId = e.target.dataset.category;
    if (categoryId === '0') {
        loadProjects();
    } else {

        const projects = await apiWork();
        console.log(projects);
        const filteredProjects = projects.filter(project => project.category.id.toString() === categoryId);
        console.log(filteredProjects)
        displayProjects(filteredProjects);
    }
    console.info(`Projet filtré pour: ${e.target.textContent}`);
}


await displayFilter();