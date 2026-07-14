let modalGallery = false;
import { modifyButton } from "./indexModuleAndSystem.js";
import {apiDeleteWork, apiWork} from "./module/callAPI.js";



// Fonction pour afficher les projets dans le DOM
export function displayProjects(projects) {
    if (localStorage.getItem('Token') === 'true') {
        const galleryModify = document.querySelector('.galleryModify');
        galleryModify.innerHTML = '';


        // Créer une figure pour chaque projet
        projects.forEach(project => {

            const figure = document.createElement('figure')
            const img = document.createElement('img');
            const buttonDelete = document.createElement('button');

            img.src = project.imageUrl;
            figure.appendChild(img);
            figure.appendChild(buttonDelete);
            galleryModify.appendChild(figure);

            createButtonDelete(buttonDelete, project);

        });
        modalGallery = false;
        console.log('✅ Galerie du modal affichée avec', projects.length, 'projets');
    }
    const gallery = document.querySelector('.gallery');

    gallery.innerHTML = '';
    // Créer une figure pour chaque projet
    projects.forEach(project => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        img.src = project.imageUrl;
        img.alt = project.title;
        figcaption.textContent = project.title;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
    console.log('✅ Galerie affichée avec', projects.length, 'projets');
}
// Fonction pour récupérer et afficher les projets
export async function loadProjects() {
    // Récupérer les projets depuis l'API
    const projects = await apiWork();  // ✅ Récupérer et assigner le résultat
    // Afficher les projets dans la galerie
    displayProjects(projects);
}


async function createButtonDelete(buttonDelete, project) {
    buttonDelete.id = project.id;
    buttonDelete.type = "button";
    buttonDelete.innerHTML = "<i class=\"fa-regular fa-trash-can\"></i>";

    buttonDelete.addEventListener("click", async () => {
        await apiDeleteWork(buttonDelete.id);
        loadProjects();
    });
}



function buttonPictureDelete(buttonPictureId) {
    buttonPictureId.addEventListener("click", () => {
        console.log(buttonPictureId.id);
    });
}

// Charger les projets au chargement de la page
loadProjects();


