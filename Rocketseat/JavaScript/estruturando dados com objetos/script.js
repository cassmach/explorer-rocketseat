
const patients = [
    {
        name: 'Luis',
        age: 20,
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
]

let patientsNames = []
/*for (let i = 0; i < patients.length; i++) {
    patientsNames[i] = patients[i].name
}*/
for (let patient of patients) {
    patientsNames.push(patient.name)
}

alert(`${patients[0].name} tem ${patients[0].age} anos, ele pesa ${patients[0].weight} quilos e tem a altura de ${patients[0].heigth}`)