import {displayProjects, loadProjects} from "./projectBuilder.js";
import {apiCategory} from "./module/callAPI.js";

const tousButton = document.querySelector(".tous");




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
        await loadProjects();
        const filteredProjects = document.querySelectorAll(`.gallery figure img[data-id="${categoryId}"]`);
        const projectsToDisplay = Array.from(filteredProjects).map(img => {
            return {
                imageUrl: img.src,
                title: img.alt,
                category: {id: parseInt(img.dataset.id)}
            };
        });
        displayProjects(projectsToDisplay);
    }
    console.info(`Projet filtré pour: ${e.target.textContent}`);
}


await displayFilter();