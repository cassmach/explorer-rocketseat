let result = prompt('Advinhe o número que estou pensando? Está entre 0 e 10')
        // Gerar numero random
const randomNumber = Math.round(Math.random() * 10) ;
       // deixar valor (1) abaixo para fazer a conta de tentativas correta
let xAttempts = 1;
     // Precisa colocar o (Number) porque result antes era uma string para o comparativo
while ( Number(result) != randomNumber) {
   result =  prompt('Erro, tente novamente')
   // se entrar aqui vamos somar uma tentativa
   xAttempts++
}

alert(`Parabens! Você advinhou o número em ${xAttempts} tentativas`)