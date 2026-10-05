//Bloque 1
// Antes de Ejecutar: Da error, ya que no se puede desestructurar un objeto como si fuera un array sin usar {}.

// const persona = { nombre: "Eva", edad: 22 };
// const [nombre, edad] = persona;
// console.log(nombre, edad);

// Bloque 1 Arreglado
const persona = { nombre: "Eva", edad: 22 };
const { nombre, edad } = persona;
console.log(nombre, edad);


// Bloque 2
// Antes de Ejecutar: Va a decir que no esta definido, porque primero y segundo no tiene nada asignado.

// const numeros = [10, 20];
// const { primero, segundo } = numeros;
// console.log(primero, segundo);

// Bloque 2 Arreglado
const numeros = [10, 20];
const [primero, segundo] = numeros;
console.log(primero, segundo);