
/*
como fazer o imc = peso / (altura * altura ) 
*/

const patients = [
    {
        name: 'Luis',
        age: 21,
        weight: 100,
        heigth: 1.90,
    },
    {
        name: 'Paulo',
        age: 26,
        weight: 79,
        heigth: 1.60,
    },
    {
        name: 'Alexandra',
        age: 26,
        weight: 70,
        heigth: 1.50,
    },
];

alert (`
   Paciente ${patients[0].name} possui o IMC de ${(patients[0].weight / (patients[0].heigth ** 2)).toFixed(2)}
   `)