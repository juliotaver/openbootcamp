
const fechaHoy = new Date();
const fechaNacimiento = new Date("Julio 12, 1995")
console.log(fechaNacimiento)

let masTarde = fechaHoy > fechaNacimiento
console.log(masTarde)

const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = fechaNacimiento.getMonth() + 1
console.log(mesNacimiento)

const anyoNacimiento = fechaNacimiento.getFullYear()
console.log(anyoNacimiento)