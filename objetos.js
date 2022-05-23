const misDatos = {
    nombre: "Julio",
    apellido: "Tavera",
    edad: 26,
    altura: 1.86,
    eresDesarrollador: true
}
const miEdad = misDatos.edad
console.log(miEdad)

const listaDatos = [
    misDatos,
    {nombre: "Daniel",
    apellido: "Vazquez",
edad: 26},
{
    nombre: "alfonso",
    apellido: "vique",
    edad: 25
}
]
console.log(listaDatos)

let ordenado = listaDatos.sort((a, b) => a.edad - b.edad)
console.log(ordenado)

