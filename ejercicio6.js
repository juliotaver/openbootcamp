let miNombre = "Julio Cesar" 
let miApellido = "Tavera Lopez"
let estudiante = miNombre + " " + miApellido
let estudianteMayus = estudiante.toUpperCase
let estudianteMinus =estudiante.toLocaleLowerCase
let letrasEstudiante = estudiante.length
console.log(letrasEstudiante);
let primeraLetra = miNombre.charAt(0)
console.log(primeraLetra)
let ultimaLetra = miApellido[11]
console.log(ultimaLetra)
let sinEspacios = estudiante.replace(/ /g, "");
console.log(sinEspacios)
let nombreSi = estudiante.includes(miNombre);
console.log(nombreSi)

