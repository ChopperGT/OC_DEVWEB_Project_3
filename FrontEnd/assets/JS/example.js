// AJOUTER DE LA GESTION D'ERREUR (COMME SUR LOGIN)

async function getWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
}

async function getCategories() {
    const response = await fetch("http://localhost:5678/api/categories");
    return await response.json();
}

async function deleteWork(id) {
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    // A LA FIN:
    displayWorks()
}

async function addWork() {
    const formData = new FormData();
    // AJOUTER LES DONNEES DANS LE FORMDATA
    const token = localStorage.getItem('token')
    const newWork = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData;
    })

    // A LA FIN:
    displayWorks()
}

async function filterWorks(category) {
    // RETOURNER LA LISTE DE PROJETS FILTRES
}

async function displayWorksInMainPage(works) {
    // AFFICHER LES PROJETS DANS LA GALERIE
}

async function displayWorksInModal(works) {
    // AFFICHER LES PROJETS DANS LA GALERIE DE LA MODALE
}

async function displayWorks() {
    displayWorksInMainPage();
    displayWorksInModal();
}
