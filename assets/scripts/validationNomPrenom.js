function verifierChamps() {
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const valideName = document.getElementById("valideName");
    

    if (prenom.trim() === "" || nom.trim() === "") {
        valideName.disabled = true;
    } else {
        valideName.disabled = false;
    }
}

document.getElementById("prenom").addEventListener("input", verifierChamps);
document.getElementById("nom").addEventListener("input", verifierChamps);

verifierChamps();

function validatedName() {
    console.log("bouton valider cliqué");
    const choixExo = document.querySelector(".ChoixExo");
    choixExo.style.display = "flex";
}


function envoyerDonnees() {
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;

    const donnees = {
        nom: nom,
        prenom : prenom
    };

    fetch('url', {
        method: 'POST',
        body: JSON.stringify(donnees),
    })
    .then(response => response.json())
}