/* function saludar(nombre){
    let saludo = "Hola " + nombre;
    alert(saludo)
}
let nombre = prompt("Ingresa tu nombre");
saludar(nombre)

let respuesta = prompt("¿Conoces algun tema de nuestro ep?") 

if(respuesta == "si"){
    let tema = prompt("¿Cuál es?");
    if(tema === "Disfraz" || tema === "disfraz"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(tema === "Mi verdad" ||tema === "mi verdad"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(tema === "Mochilero"||tema === "mochilero"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(tema === "Arde"||tema === "arde"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(tema === "Realidad"||tema === "realidad"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else{
        alert("Ese tema no es nuestro");
    }
}
else{
    alert("No pasa nada, ingresa a la pagina y conoce sobre nosotros")
} */

/* DESAFIO COMPLEMENTARIO AGREGAR ARRAYS */

let respuesta = prompt("Conoces alun trema de Por un Día?")

if(respuesta === "si" || respuesta === "Si"){
   
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
    alert("No pasa nada, ingresa y conocenos")
}










