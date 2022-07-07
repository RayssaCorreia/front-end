const botaoJS = document.querySelector (".botaoHtml");
const segundos = document.querySelector ("#segundosNum");
const minutos = document.querySelector ("#minutosNum");
const horas = document.querySelector ("#horasNum");

let apertou = 0;
let texto = 0;
let tempo = 0;

function contadorSegundos(){
    if(segundos.textContent < 59){   
        segundos.textContent = parseInt(segundos.textContent) +1;
    
    }else{
        segundos.textContent = 0;
            if(minutos.textContent < 59){
                minutos.textContent = parseInt(minutos.textContent) +1;
        }else{
            minutos.textContent = 0;
                if(horas.textContent < 23){
                    horas.textContent = parseInt(horas.textContent) +1;     
            }else{
                segundos.textContent = 0;
                minutos.textContent = 0;
                horas.textContent = 0;
            }
        }
    }
}

function stop(){
    botaoJS.classList.remove("botaoJS");
    botaoJS.classList.remove("verde");
    botaoJS.classList.add("vermelho");
}

botaoJS.onclick = function() {
    apertou++;
    
    switch(apertou){
        
        case 1:
            texto = "Stop"
            botaoJS.textContent = `${texto}`
            stop();
            tempo = setInterval(contadorSegundos,1000);
        break;

        case 2:

            texto = "Reset"
            botaoJS.textContent = `${texto}`
            clearInterval(tempo);
            console.log("stopContador_função");
            botaoJS.classList.remove("vermelho");
            botaoJS.classList.remove("botaoJS");
            botaoJS.classList.add("verde");
            
        break;

        case 3:
            texto = "Start"
            botaoJS.textContent = `${texto}`
            segundos.textContent = "00";
            minutos.textContent = "00";
            horas.textContent = "00";
            
            botaoJS.classList.remove("vermelho");
            botaoJS.classList.remove("verde");
            botaoJS.classList.add("botaoJS");

            apertou = 0;
            break;

    }
}



