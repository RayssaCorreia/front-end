// está é minha div do HTML
const paginaHTML = document.querySelector("#page");

// Quando não tem metodo, ele fas get 
fetch("https://api.github.com/users/RayssaCorreia/repos")

    //quando eu receber, será em jason
    .then(response => {
        return response.json()

    })
    // se der error mostrar:
    .catch((error) => {
        console.log('Error:', error);
    })
    //tudo certo, pega a resposta e printa ne tela HTML
    .then(response => {
       mostrar(response)

    })


function mostrar(valor) {
    //a div em formato texto, recebe o valor jason como string
    paginaHTML.innerText = JSON.stringify(valor)
}
