
/*
alert ('Vamos fazer cálculos  dois numeros!');



let numberOne = Number ( prompt ('Digite o primeiro numero'));
let numberTwo = Number (prompt ('Digite o segundo numero'));
resultado()

function resultado () {
    if (prompt === '') {
        const sum = numberOne + numberTwo;
        const sub = numberOne - numberTwo;
        const multi = numberOne * numberTwo;
        const div = numberOne / numberTwo;


        

        
        alert ('Soma é: ' +  sum)
        alert ('Subtração é: ' + sub)
        alert ('A multiplicação é ' + multi)
        alert ('A divisão é ' + div)
        
        alert('E aqui acaba.');
        
    } else {
        alert ('Não foi adicionado numeros')
    }
};

*/

let student = prompt  ('Qual o nome do(a) aluno(a) ?')
let n1 = prompt  ('Qual a nota da primeira prova?')
let n2 = prompt  ('Qual a nota da segunda prova?')
let n3 = prompt  ('Qual a nota da terceira prova?')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6
average = average.toFixed(2)


if (result) {
    alert('Parabéns, ' + student + ' Sua média foi de ' + average)
} else if (average < 3) {
    alert ('Reprovado')
}
 else {
    alert (student + ' estude para a sua prova de recuperação! Sua média foi de ' + average)
}
