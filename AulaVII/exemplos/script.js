// let valor = 0;

// const contador = document.querySelector('#contador');
// const botao = document.querySelector('#botao');

// botao.onclick = function() {
//     contador.innerHTML = valor++;
// } 

// botao.addEventListener("click" , incrementaValor, false );

// function incrementaValor(){
//     contador.innerHTML = valor++;
// }


// setTimeout(function mostraAlerta() {
//     alert("Timeout!!!!")

// },5000);

// setInterval(function (){
//     contador.innerHTML = ++valor;
// },1000)

// setInterval( () =>{
//     contador.innerHTML = ++valor;
// },1000)

const fruta = document.querySelector('.fruta-verde');

function deixarFrutaMadura(fruta){
    fruta.classList.remove("fruta");
    fruta.classList.add("fruta-madura");
}

function deixarFrutaVerde(fruta){
    fruta.classList.remove("fruta-madura");
    fruta.classList.add("fruta");
}

setInterval(() => {

    if(fruta.classList.contains('fruta')){
  //  console.log("deixar fruta laranja",fruta);
    deixarFrutaMadura(fruta)

    }else{
     //   console.log("deixar fruta verde",fruta);
        deixarFrutaVerde(fruta)
    }
    
},1000)


