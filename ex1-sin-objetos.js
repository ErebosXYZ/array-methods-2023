/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obtener la información requerida
 *
 *  Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */

numbers.forEach(n => console.log(`Ejercicio 1: Siguiente número ${n}`))

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */

console.log('Ejercicio 2: Primer número mayor de 10: ' + numbers.find(checkAge));

function checkAge(age) {
    return age > 10;
}


/**
 * Utliza el método some para saber si existe un número mayor de 20
 */

// const mayor20 = ;

console.log(`Ejercicio 3: ¿Existe un número mayor de 20? ${numbers.some((e) => e > 20)}`);


/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */


console.log(`Ejercicio 4: ¿Son todos los números impares? ${numbers.every((e) => e % 2 != 0)}`);


/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */

const between3and9 = numbers.filter((n) => n > 3 && n < 9);

console.log('Ejercicio 5: Números mayores de 3 pero menores de 9: ', between3and9);

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

// const positivesAndNegatives = numbers.map((n) => {
//     if (n < 0){
//         n = -1;
//     } else if(n > 0){
//         n = 1;
//     } return n;
// })

const positivesAndNegatives = numbers.map(n => n < 0 ? -1 : 1);

// condició(n < 0) ? valor_si_és_cert (-1) : valor_si_és_fals (1);

console.log('Ejercicio 6: Nuevos números con -1 para negativos y +1 para positivos: ', positivesAndNegatives);