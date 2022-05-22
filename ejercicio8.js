const listaCompras = ["agua", "leche", "huevos", "cereal", "jugo"]
listaCompras.push("aceite de girasol")
console.log(listaCompras)
listaCompras.splice(5,1);
console.log(listaCompras)

const peliculas = [
    {titulo: "Harry potter y el prisionero de azkaban", director: "Guillermo Del Toro", fecha: 2004},
    {titulo: "Tenet", director: "Christoper Nolan", fecha: 2020},
    {titulo: "Ready Player One", director: "Steven Spielberg", fecha: 2018}
]
const peliculasNuevas = peliculas.filter(obj => obj.fecha > 2010 )
console.log(peliculasNuevas)

const directores = peliculas.map((director) => director )
console.log(directores)

const listaDirectores = peliculas.concat(peliculas.titulo)
console.log(listaDirectores)