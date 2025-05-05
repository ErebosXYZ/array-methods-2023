const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola

students.forEach(n => console.log('Ejercicio 1: Siguiente nombre: ', n));

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"

console.log("Ejercicio 2: Índice de 'Maria': ", students.findIndex((i) => i == "Maria"));

// Utiliza el método some para saber si en este array existe la alumna "Katerina"

console.log(`Ejercicio 3: ¿Existe Katerina? ${students.some((e) => e == "Katerina")}`);

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres

// console.log('Ejercicio 4: Primer nombre con 5 o menos caracteres: ', students.find(checkCharacters));

// function checkCharacters (name){
//   return name.length <= 5;
// }

console.log('Ejercicio 4: Primer nombre con 5 o menos caracteres: ', students.find((name) => name.length <= 5));

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres

console.log('Ejercicio 5: ¿Todos los nombres tienen al menos 4 caracteres? ', students.every((name) => name.length <= 4));

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i

console.log("Ejercicio 6: Nombres que contienen la letra 'i': ", students.filter((name) => name.includes("i") ));

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre

console.log('Ejercicio 7: Iniciales de los nombres: ', students.map((i) => i[0]));