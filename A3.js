// 1
function crearFicha({ titulo, autor, paginas }) {
  return `${titulo} - ${autor} (${paginas} pág.)`;
}

// 2
const libro = { titulo: "Drácula", autor: "Bram Stoker", paginas: 418 };
console.log(crearFicha(libro));

// 3
console.log(crearFicha({ titulo: "Las aventuras de la Pepi", autor: "Pepi", paginas: 300 }));