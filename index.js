function saludar(nombre){
    let saludo = "Hola " + nombre;
    alert(saludo)
}
let nombre = prompt("Ingresa tu nombre");
saludar(nombre)

let respuesta = prompt("¿Conoces algun tema de nuestro ep?") 

if(respuesta == "si"){
    let tema = prompt("¿Cuál es?");
    if(tema === "Disfraz" || "disfraz"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(respuesta === "Mi verdad" || "mi verdad"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(respuesta === "Mochilero"|| "mochilero"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(respuesta === "Arde"||"arde"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else if(respuesta=== "Realidad"||"realidad"){
        alert("Ingresaste " + tema +", entra a la pagina y conoce más sobre la banda.");
    }else{
        alert("Ese tema no es nuestro");
    }
}
else{
    alert("No pasa nada, ingresa a la pagina y conoce sobre nosotros")
}


