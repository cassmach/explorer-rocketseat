// validação de dados
export function notNumber (value) {
    return isNaN(value) || value == ""
}


// Função só do cálculo
export function calculateIMC (weight, height) {
    return  (weight / (height ** 2)).toFixed(2)
 }