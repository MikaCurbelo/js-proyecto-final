

let temas = document.getElementById("temas");
temas.innerHTML = "<h4 class=titulo2 >Lista de canciones</h4> <p class=borderNone>1- Mochilero <br> 2- Disfraz <br> 3- Mi verdad <br> 4- Realidad <br> 5- Arde(Vivo)</p>"

let musica = document.getElementById("musica");
musica.innerHTML = "<h5 class=titulo2> Escuha un poco </h5>"
//  TEMA 1
   let tema1Pl = document.getElementById('mochileroPl'); 
   tema1Pl.addEventListener('click', presionar1); 

   let tema1Pa = document.getElementById('mochileroPa'); 
   tema1Pa.addEventListener('click', pausar1)


function presionar1() { 
   let moch = document.getElementById('moch'); 
      moch.play();   
} 
function pausar1(){
      moch.pause();
}

// TEMA 2
   let tema2Pl = document.getElementById('disfrazPl'); 
   tema2Pl.addEventListener('click', presionar2);

   let tema2Pa = document.getElementById('disfrazPa');
   tema2Pa.addEventListener('click', pausar2)


function presionar2() { 
   let dis = document.getElementById('dis'); 
  dis.play(); 
} 

function pausar2(){
   dis.pause();
}


// TEMA 3
   let tema3Pl = document.getElementById('miVerdadPl'); 
   tema3Pl.addEventListener('click', presionar3); 

   let tema3Pa = document.getElementById('miVerdadPa');
   tema3Pa.addEventListener('click', pausar3)


function presionar3() { 
   let miVer = document.getElementById('miV'); 
   miVer.play(); 
} 
function pausar3(){
   miV.pause();
}


// TEMA 4
   let tema4Pl = document.getElementById('realidadPl'); 
   tema4Pl.addEventListener('click', presionar4); 

   let tema4Pa = document.getElementById('realidadPa');
   tema4Pa.addEventListener('click', pausar4);


function presionar4() { 
   let real = document.getElementById('real'); 
   real.play(); 
} 

function pausar4() {
real.pause();
}

// TEMA 5
   let tema5Pl = document.getElementById('ardePl'); 
   tema5Pl.addEventListener('click', presionar5); 

   let team5Pa = document.getElementById('ardePa');
   team5Pa.addEventListener('click', pausar5);


function presionar5() { 
   let ard = document.getElementById('ard'); 
   ard.play(); 
} 

function pausar5(){
   ard.pause();
}



fetch('./data.json')
.then((resp) => resp.json())
.then(data => {
   const enLStorage = JSON.stringify(data);
   console.log(enLStorage);
   localStorage.setItem("ListaDeTemas", enLStorage);
   
   const recuperarLista = localStorage.getItem("ListaDeTemas");
   console.log(JSON.parse(recuperarLista));

})

const listaSuscriptores = ["Suscriptores", ];


const btnSend = document.getElementById("btnSend")
btnSend.addEventListener('click', () =>{

let nombre = document.getElementById("nombre").value;
if(nombre.length == 0) {
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Escribe un monbre v??lido',
      backdrop: `
      rgba(255,0,0,0.4)`
    })
   return;
 }
 let correo = document.getElementById("correo").value;
 if (correo.length < 6) {
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Escribe un correo v??lido',
      backdrop: `
      rgba(255,0,0,0.4)`
    })
   return;
 }


   const nombreSus = document.getElementById("nombre").value;
   const correoSus = document.getElementById("correo").value;
   listaSuscriptores.push(correoSus);
   listaSuscriptores.push(nombreSus);
   console.log(listaSuscriptores);



   Swal.fire({
      title: 'Te has suscripto correctamente',
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
      rgba(116,187,33,0.3)`
    })

    
})





