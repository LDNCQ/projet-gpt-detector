function verifierCheckbox() {
    const checkbox = document.getElementById('regleValider');
    const submit = document.getElementById('submit');

    if (checkbox.checked) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}

document.getElementById('regleValider').addEventListener('input', verifierCheckbox);

verifierCheckbox();