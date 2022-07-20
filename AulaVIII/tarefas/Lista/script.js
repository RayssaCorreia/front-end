feather.replace()

const divTarefa = document.createElement("div");
divTarefa.setAttribute("class", "tarefa");
document.getElementById("tarefas").appendChild(divTarefa);

const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
document.querySelector(".tarefa").appendChild(checkbox);

const textoTarefa = document.createElement("label")



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