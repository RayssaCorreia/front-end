feather.replace()

// TAGS & VARIAVEIS //
const divTarefa = document.createElement("div");
const checkbox = document.createElement("input");
const textoTarefa = document.createElement("label");
const lixeira = document.createElement("img");
const botaoJS = document.querySelector ("#btnMais");
let texto = [];

// DIV - TAREFA //
divTarefa.setAttribute("class", "tarefa2");
document.getElementById("tarefas").appendChild(divTarefa);

// CHECKBOX // 
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("class", "checkbox");
checkbox.setAttribute("name", "subscribe");
checkbox.setAttribute("IDTarefa", "0");// gerado pelo backend

// LABEL - TEXTO BARRA //
textoTarefa.setAttribute("for", "subscribeNews");
textoTarefa.setAttribute("class", "taref");

// IMG - LIXEIRA // 
lixeira.setAttribute("class", "lixeira");
lixeira.setAttribute("src", "./img/lixeira.png");
lixeira.setAttribute("alt", "lixeira");


textoTarefa.onkeyup = () => {
    texto = textoTarefa.value
    if (texto.length > 0) {
        apiCreateTask(`${texto}`, true);
    }
}

botaoJS.onclick = function HTTPCreateTask(){
    textoTarefa.innerHTML = `${texto}`;
    document.querySelector(".tarefa2").appendChild(checkbox);
    document.querySelector(".tarefa2").appendChild(textoTarefa);
    document.querySelector(".tarefa2").appendChild(lixeira);

}

// GET //
async function apiGetTask(){
    
    const url = 'http://localhost:3000/tasks'
    
    const response = await fetch(url);
    
    //return await response.json()
    console.log( await response.json());
    
}

// POST //
async function apiCreateTask(description, complete) {
    
    const newTask = {description, complete}
    
    const url = 'http://localhost:3000/tasks'
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
        
    }
    
    const response = await fetch(url, options);
    
    
    console.log( await response.json());
}


// DELETE //
async function apiDeleteTask(id) {
    
    const url = `http://localhost:3000/tasks/${id}`
    
    const options = {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        },     
    }
    
    const response = await fetch(url, options);
    
    if(response.status == 204){
        console.log("Tarefa deletada com sucesso")
    }
}


// PATCH //
async function apiUpdateTask(id, complete){
    
    const newTask = {complete}
    
    const url = `http://localhost:3000/tasks/${id}`
    
    const options = {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },  
        body: JSON.stringify(newTask)
    }
    
    const response = await fetch(url, options);
    
    if(response.status == 204){
        console.log("Tarefa atualizada com sucesso")
    }
}

//apiCreateTask("dfdsfg", true);

//apiGetTask() // retorna a lista de Tarefas

//apiUpdateTask(128, false) 

//apiDeleteTask(126)