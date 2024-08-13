
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

// Função só do cálculo
function IMC (weight, heigth) {
   return  (weight / (heigth ** 2)).toFixed(2)
}


// aqui criação a função onde ele busca e retorna o array 
// const printPatientImc = function (patients) {...    Modelo de função anonima
// const printPatientImc =  (patients) => {...  Modelo de Arrow anonima
function printPatientImc(patients) {
    return (`
        Paciente ${patients.name} possui o IMC de ${IMC(patients.weight, patients.heigth)}
        `)
}



for ( let patient of patients) {  // criação de um loop FOR OF para não precisar ficar chamando a função manualmente
    let imcMessage = printPatientImc(patient)
   console.log(imcMessage)
};
