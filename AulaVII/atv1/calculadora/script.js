let display = 0;

const displayElement = document.getElementById("display")
//const display = document.querySelector("display")
const buttonsElements = document.querySelectorAll(".btn")

//vetor
buttonsElements.forEach(
    // buttonsElements[i = buttonElement]
    (buttonElement) => {
    //    console.log(buttonElement)
        buttonElement.onclick = onButtonClickEvent;
})


    function onButtonClickEvent(event) {
        const buttonElement = event.target

        // console.log("Botão" + buttonElement.innerText + "precionado")
        // display += buttonElements.innerText
        // updateDisplay()

        switch(buttonElement.innerText){

            case "C":
                limparDisplay();
                break;

            case "=":
                calcularResultado();
                break;

            default:
                adicionarcaractere(buttonElement.innerText);
                break;
        }
        updateDisplay()
    }


    // function updateDisplay(){
    //     displayElement.innerText = display
    // }


    function limparDisplay() {
        display= "0";
    }
    
    function calcularResultado(){
        try{ 
            display = eval(display)
        }catch(erro){
            display= "ERR!!!"
        }//display += caractere
    }

    function adicionarcaractere(caractere){
        if(display == "0" && caractere !== ".")
        display = ""

        display += caractere
    }

    function updateDisplay(){
        displayElement.innerText = display
    }