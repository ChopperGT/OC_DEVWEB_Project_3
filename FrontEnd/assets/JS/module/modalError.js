const errorModal = document.getElementById("errorModal");
const closeErrorModal = document.getElementById("closeErrorModal");
const closeErrorModalConfirm = document.getElementById("closeErrorModalConfirm");

closeErrorModal.addEventListener("click", () => {
    errorModal.close();
});

closeErrorModalConfirm.addEventListener("click", () => {
    errorModal.close();
});