 function saludar(nombre){
    let saludo = "Hola " + nombre;
    alert(saludo)
}
let nombre = prompt("Ingresa tu nombre");
saludar(nombre)


let respuesta1 = prompt("¿Sabes cómo se llaman los cinco temas de nuestro EP?")

if(respuesta1 === "si" || respuesta1 === "Si"){
   
const temasDeLaBanda = [];
let   cantidad     = 5;

do{
   let entrada = prompt("Ingresar nombre");
   temasDeLaBanda.push(entrada);
   console.log(temasDeLaBanda.length);
}while(temasDeLaBanda.length != cantidad)
const lista = temasDeLaBanda.concat(["Esta lista no queda acá, este año grabaremos muchos más!!!"]);
alert(lista.join("\n"));
}else{
    alert("No pasa nada, ingresa y conocelos")
}

let respuesta2 = prompt("De los temas que conoces o has escuchado ¿Cuál es el tema que mas te gustó?") 

if(respuesta2 == "disrfaz"||respuesta2 == "arde"||respuesta2 == "mi verdad"||respuesta2 == "realidad"||respuesta2 == "mochilero"||respuesta2 == "Disrfaz"||respuesta2 == "Arde"||respuesta2 == "Mi verdad"||respuesta2 == "Realidad"||respuesta2 == "Mochilero"){
    alert("te ha gustado " + respuesta2);
}else{
    alert("Ese tema no es nuestro")
} 

const infoTema = [
    {nombre: "Mi verdad", duracion: 3.35},
    {nombre: "Disfraz", duracion: 5.04},
    {nombre: "Mochilero", duracion: 4.48},
    {nombre: "Realidad", duracion: 4.45},
    {nombre: "Arde", duracion: 4.32},
]

const duracionDelEp = infoTema.reduce((acumulador, elemento) => acumulador + elemento.duracion, 0)
alert("escuchar el ep solo te tomará " + Math.ceil(duracionDelEp) + " minutos, clikea en el logo del EP" );

let  form = document.getElementById("formulario");

form.addEventListener("submit", validar);

function validar(e) {
 e.preventDefault();

 console.log(e);
}

