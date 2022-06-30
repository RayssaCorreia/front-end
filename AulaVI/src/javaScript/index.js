const botao1 = document.querySelector("#botao_somar")
const botao2 = document.querySelector("#botao_subtrair")
const numero = document.querySelector("#numero")


botao1.onclick = () => {
    numero.textContent = parseInt(numero.textContent) +1;
}
    
botao2.onclick = () => {
    if(numero.textContent > 0){
        numero.textContent = parseInt(numero.textContent)-1;
     }
}
    
function pular() {
    document.getElementById("personagem3").style.cssText = 'transition: all 0.3s  ease-out;'; 
    document.getElementById("personagem3").style.top = "-30px";
    setTimeout(function(){document.getElementById("personagem3").style.top = "60px";},200);
}