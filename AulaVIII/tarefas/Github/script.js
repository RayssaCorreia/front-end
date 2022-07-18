feather.replace()


const paginaHTML = document.querySelector("#pagina")
const barraHTML = document.querySelector(".barra_pesquisa")
const botaoHTML = document.querySelector("#pesquisar")

let Usuario = []

barraHTML.onkeyup = () => {
     Usuario = barraHTML.value
}

botaoHTML.onclick = () => {
    if (Usuario.length > 0) {
        view()
        alert(`Repositórios de ${Usuario}`)
    }
}

const view = async () => {
    const repositoriosWeb = await fetch(`https://api.github.com/users/${Usuario}/repos`)
    const repositorios = await repositoriosWeb.json();

    paginaHTML.innerHTML = ""

    repositorios.forEach(repositorio => {
        const html = 
            `<div class="repositorio">
                <h3>${repositorio.name}</h3>
                <p>${repositorio.language}</p>
            </div>`;

        
        paginaHTML.innerHTML += html
   })
}