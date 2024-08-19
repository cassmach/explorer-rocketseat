// variáveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector('.screen2');
// Criar um numero randomico
let randomNumber = Math.round(Math.random() * 10) ;
// variavel de controle de tentativas
let xAttempts = 1;

// events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e) {
if(e.key =='Enter') {
    handleResetClick()
}
})

// função callback
function handleTryClick (event) {
    // para não fazer o padrão do form
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    
    // Quando a condição for true, troca a screen
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas`

    }
    inputNumber.value = ""
    xAttempts++ 
}

function handleResetClick () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10) ; //Gera um novo número aleátorio
    
}