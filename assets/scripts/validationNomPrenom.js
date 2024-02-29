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

    if (choixExo.style.display === "none") {
        choixExo.style.display = "flex";
    } else {
        choixExo.style.display = "none";
    }
}


