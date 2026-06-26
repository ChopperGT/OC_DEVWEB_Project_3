// ========== AFFICHAGE DE LA GALERIE DEPUIS LE BACKEND ==========

const API_URL = 'http://localhost:5678';

// Fonction pour afficher les projets dans le DOM
function displayProjects(projects) {
    const gallery = document.querySelector('.gallery');

    // Créer une figure pour chaque projet
    projects.forEach(project => {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = project.imageUrl;
        img.alt = project.title;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = project.title;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        gallery.appendChild(figure);
    });

    console.log('✅ Galerie affichée avec', projects.length, 'projets');
}
// Fonction pour récupérer et afficher les projets
async function loadProjects() {

    // Récupérer les projets depuis l'API
    const response = await fetch(`${API_URL}/api/works`);
    const projects = await response.json();
    console.log('✅ Projets récupérés :', projects);

    // Afficher les projets dans la galerie
    displayProjects(projects);
}
// Charger les projets au chargement de la page
loadProjects();