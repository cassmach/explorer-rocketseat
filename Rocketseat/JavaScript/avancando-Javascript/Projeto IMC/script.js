// variáveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');


// evitar o padrão do form
form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const result = IMC(weight, height);
    console.log(result);

}

// Função só do cálculo
function IMC (weight, height) {
    return  (weight / (height ** 2)).toFixed(2)
 }