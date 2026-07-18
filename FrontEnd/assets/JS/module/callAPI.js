const API_URL = 'http://localhost:5678';

//Call API Works
export async function apiWork() {
    try {
        let response;
        let projects;
        console.info("Call API")
        response = await fetch(`${API_URL}/api/works`);
        console.log("STATUS REÇU:", response.status);
        if (response.status === 400) {
            console.error("400 - Bad Request");
            const titleError = "Erreur de saisie";
            const messageError = "Les éléments ne sont pas remplis correctement";
            modalError(titleError,    messageError);
            return null
        }
        if (response.status === 401) {
            console.error("401 - Unauthorized");
            const titleError = "Non autorisé"
            const messageError = "Vous n'êtes pas autorisé à accéder à cette ressource";
            modalError(titleError, messageError);
            return null
        }
        if (response.status === 404) {
            console.error("404 - API not found");
            const titleError = "Element introuvable";
            const messageError = "L'élément que vous recherchez n'existe pas";
            modalError(titleError, messageError);
            return null
        }
        projects = await response.json();
        console.info(" API call success");
        return projects;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

//Call API Login
export async function apiLogin(email, password) {
    let response;
    try {
        console.info("Call API")
        response = await fetch(`${API_URL}/api/users/login`, {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });

        if (response.status === 400) {
            console.error("400 - Bad Request");
            const titleError = "Erreur de saisie";
            const messageError = "Les éléments ne sont pas remplis correctement";
            modalError(titleError,    messageError);
            return null
        }
        if (response.status === 401) {
            console.error("401 - Unauthorized");
            const titleError = "Non autorisé"
            const messageError = "Vous n'êtes pas autorisé à accéder à cette ressource";
            modalError(titleError, messageError);
            return null
        }
        if (response.status === 404) {
            console.error("404 - API not found");
            const titleError = "Identifiant incorrect";
            const messageError = "L'email ou le mot de passe est incorrect";
            modalError(titleError, messageError);
            return null
        }
        const data = await response.json();
        console.info(" API call success");
        return data;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

//Call API Category
export async function apiCategory() {
    let response;
    try {
        console.info("Call API")
        response = await fetch(`${API_URL}/api/categories`);
        if (response.status === 400) {
            console.error("400 - Bad Request");
            const titleError = "Erreur de requête";
            const messageError = "La catégorie n'existe pas";
            modalError(titleError,    messageError);
            return null
        }
        if (response.status === 401) {
            console.error("401 - Unauthorized");
            const titleError = "Non autorisé"
            const messageError = "Vous n'êtes pas autorisé à accéder à cette ressource";
            modalError(titleError, messageError);
            return null
        }
        if (response.status === 404) {
            console.error("404 - API not found");
            const titleError = "Identifiant incorrect";
            const messageError = "L'email ou le mot de passe est incorrect";
            modalError(titleError, messageError);
            return null
        }
        const categoryId = await response.json();
        console.info(" API call success");
        return categoryId;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}


//Call API Add Work
export async function apiAddWork(formData) {
    let response;
    try {
        const token = localStorage.getItem('token');
        console.info("Call API")
        response = await fetch(`${API_URL}/api/works`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData
        });

        if (response.status === 400) {
            console.error("400 - Bad Request");
            const titleError = "Erreur de saisie";
            const messageError = "Les éléments ne sont pas remplis correctement";
            modalError(titleError,    messageError);
            return null
        }
        if (response.status === 401) {
            console.error("401 - Unauthorized");
            const titleError = "Non autorisé"
            const messageError = "Vous n'êtes pas autorisé à accéder à cette ressource";
            modalError(titleError, messageError);
            return null
        }
        if (response.status === 404) {
            console.error("404 - API not found");
            const titleError = "Element introuvable";
            const messageError = "L'élément que vous recherchez n'existe pas";
            modalError(titleError, messageError);
            return null
        }
        console.info(" API call success");
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

//Call API Delete Work
export async function apiDeleteWork(id) {
    let response;
    try {
        const token = localStorage.getItem('token');
        console.info("Call API")
        response = await fetch(`${API_URL}/api/works/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });

        if (response.status === 400) {
            console.error("400 - Bad Request");
            const titleError = "Erreur de saisie";
            const messageError = "Les éléments ne sont pas remplis correctement";
            modalError(titleError,    messageError);
            return null
        }
        if (response.status === 401) {
            console.error("401 - Unauthorized");
            const titleError = "Non autorisé"
            const messageError = "Vous n'êtes pas autorisé à accéder à cette ressource";
            modalError(titleError, messageError);
            return null
        }
        if (response.status === 404) {
            console.error("404 - API not found");
            const titleError = "Element introuvable";
            const messageError = "L'élément que vous recherchez n'existe pas";
            modalError(titleError, messageError);
            return null
        }
        console.info(" API call success");
    }
    catch (error) {
        console.error(error);
        return null;
    }
}


function modalError(titleError, messageError) {
    const errorModal = document.getElementById("errorModal");
    const errorModalTitle = document.getElementById("errorModalTitle");
    const errorModalMessage = document.getElementById("errorModalMessage");
    errorModalTitle.textContent = titleError;
    errorModalMessage.textContent = messageError;
    errorModal.showModal();
}
