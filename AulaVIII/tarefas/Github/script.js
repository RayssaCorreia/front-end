const paginaHTML = document.querySelector(".page");

fetch("https://api.github.com/users/nathandg/repos", {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },

    body: json.stringify(paginaHTML),
    
    })
    
    .then(response => response.json())
    .then(paginaHTML => {
        console.log('Success:', paginaHTML);
    })
    .catch((error) => {
        console.log('Error:', error);
    });

