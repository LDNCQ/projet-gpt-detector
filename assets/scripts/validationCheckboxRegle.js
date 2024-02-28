function verifierCheckboxPopUp() {

    const checkbox = document.getElementById('regleValider');
    const continuerPopUp = document.getElementById('continuerPopUp');

    if (checkbox.checked) {
        continuerPopUp.disabled = false;
    } else {
        continuerPopUp.disabled = true;
    }
};

document.getElementById('regleValider').addEventListener('input', verifierCheckboxPopUp);

verifierCheckboxPopUp()