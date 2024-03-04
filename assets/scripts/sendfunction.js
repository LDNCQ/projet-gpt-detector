function sendB() {
        const reponse = document.getElementById('reponsequestion1').value;

    
        const postData = 
        {
            "reponse" : reponse
        };
    
        fetch('http://localhost:3000/api/v1/reponses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
    window.location = '../../credit.html'
}

function sendA() {

    window.location = '../../credit.html'
}

