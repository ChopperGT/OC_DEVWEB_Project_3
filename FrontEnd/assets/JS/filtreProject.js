import {displayProjects, loadProjects} from "./projectBuilder.js";
const tousButton = document.querySelector(".tous");
const objetsButton = document.querySelector(".objets");
const appartementsButton = document.querySelector(".appartements");
const hotelButton = document.querySelector(".hotel");



async function readAllProjects() {
    const response = await fetch(`http://localhost:5678/api/works`);
    return await response.json();
}



// Fonction pour filtrer par catégorie
async function filterByCategory(categoryId) {
    const allProjects = await readAllProjects();
    const filtered = allProjects.filter(project => project.categoryId === categoryId);
    displayProjects(filtered);
}

tousButton.addEventListener("click", () => {
    loadProjects();
    console.log("Filtre Tous appliqué");
})

// Bouton Objets
objetsButton.addEventListener("click", () => {
    filterByCategory(1); // 1 = Objets
    console.log("Filtre Objets appliqué");
});

appartementsButton.addEventListener("click", () => {
    filterByCategory(2); // 1 = Objets
    console.log("Filtre Appartements appliqué");
});

hotelButton.addEventListener("click", () => {
    filterByCategory(3); // 1 = Objets
    console.log("Filtre Hotels & restaurants appliqué");
});