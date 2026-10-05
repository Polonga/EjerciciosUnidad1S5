// Bug 1: TypeError: {nombre: "Ana"} is not iterable

// Corregido
function saludar({ nombre }) {
  return `Hola ${nombre}`;
}

console.log(saludar({ nombre: "Ana" }));

// Bug 2: undefined, de George Orwell

// Corregido
const libro = { Titulo: "1984", autor: "George Orwell" };

function describir({ Titulo: titulo, autor }) {
  return `${titulo}, de ${autor}`;
}

console.log(describir(libro)); // Salida: "1984, de George Orwell"