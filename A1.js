const libro = { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 310 };

// 1
const { titulo, autor } = libro;
console.log(titulo, "de" ,autor);

// 2
function describir({ titulo, autor, paginas }) {
    return titulo + " es un libro de " + autor + " que tiene " + paginas + " páginas.";
}
console.log(describir(libro))

// 3
const {editorial} = libro;
console.log(editorial);