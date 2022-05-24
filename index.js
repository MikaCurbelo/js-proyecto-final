
const infoTema = [
    {id:1, nombre: "Mi verdad", duracion: 3.35},
    {id:2, nombre: "Disfraz", duracion: 5.04},
    {id:3, nombre: "Mochilero", duracion: 4.48},
    {id:4, nombre: "Realidad", duracion: 4.45},
    {id:5, nombre: "Arde", duracion: 4.32},
]


let temas = document.getElementById("temas");
temas.innerHTML = "<h4 class=titulo2 >Lista de canciones</h4> <p class=borderNone>1- Mochilero <br> 2- Disfraz <br> 3- Mi verdad <br> 4- Realidad <br> 5- Arde(Vivo)</p>"

 
   let tema1 = document.getElementById('mochilero'); 
   tema1.addEventListener('click', presionar1); 

function presionar1() { 
   let moch = document.getElementById('moch'); 
   moch.play(); 
} 


   let tema2 = document.getElementById('disfraz'); 
   tema2.addEventListener('click', presionar2); 

function presionar2() { 
   let dis = document.getElementById('dis'); 
  dis.play(); 
} 
   let tema3 = document.getElementById('miVerdad'); 
   tema3.addEventListener('click', presionar3); 

function presionar3() { 
   let miVer = document.getElementById('miV'); 
   miVer.play(); 
} 
   let tema4 = document.getElementById('realidad'); 
   tema4.addEventListener('click', presionar4); 

function presionar4() { 
   let real = document.getElementById('real'); 
   real.play(); 
} 
   let tema5 = document.getElementById('arde'); 
   tema5.addEventListener('click', presionar5); 

function presionar5() { 
   let ard = document.getElementById('ard'); 
   ard.play(); 
} 














const enLStorage = JSON.stringify(infoTema);
console.log(enLStorage);
localStorage.setItem("ListaDeTemas", enLStorage);

const recuperarLista = localStorage.getItem("ListaDeTemas");
console.log(JSON.parse(recuperarLista));


