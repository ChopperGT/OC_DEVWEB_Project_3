import {displayProjects, loadProjects} from "./projectBuilder.js";
import {apiWork} from "./module/callAPI.js";

const tousButton = document.querySelector(".tous");
let filtre = document.querySelectorAll(".filtre");


// Fonction pour filtrer par catégorie
async function filterByCategory(categoryId) {
    const allProjects = await apiWork();
    const filtered = allProjects.filter(project => project.categoryId == categoryId);
    displayProjects(filtered);
}



filtre.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.matches("filtre")) return;
        document.querySelectorAll(".filtre").forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        const categoryId = e.target.dataset.category;
        if (categoryId === undefined) {
            loadProjects();
        }
        else {
            filterByCategory(categoryId);
        }
        console.info(`Projet filtré pour: ${e.target.textContent}`);
    });
});