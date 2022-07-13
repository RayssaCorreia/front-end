feather.replace()

async function apiGetTask(){

    const url = 'http://localhost:3000/tasks'

    const response = await fetch(url);

    return await response.json()
}


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

    return await response.json()
}

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

    // return await response.json()

    if(response.status == 204){
        console.log("Tarefa atualizada com sucesso")
    }
}

// apiCreateTask("xuaaaaa", true);

// apiGetTask() // retorna a lista de Tarefas

apiUpdateTask(17, false) 

// apiDeleteTask(8)