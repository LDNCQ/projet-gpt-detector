function verifierChamps() {
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const quizButton = document.getElementById("quizButton");
    const questionButton = document.getElementById("questionButton");
    

    if (prenom.trim() === "" || nom.trim() === "") {
        quizButton.disabled = true;
        questionButton.disabled = true;
    } else {
        quizButton.disabled = false;
        questionButton.disabled = false;
    }
}

document.getElementById("prenom").addEventListener("input", verifierChamps);
document.getElementById("nom").addEventListener("input", verifierChamps);

verifierChamps();

