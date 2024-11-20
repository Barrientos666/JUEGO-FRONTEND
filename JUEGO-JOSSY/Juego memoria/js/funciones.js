//variables globales
const d = document;
//imagenes del juego
let imgN1 = [
    {NOMBRE:"SIU", url:"IMG/siu.jpg"},
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"},
    {NOMBRE:"SIU", url:"IMG/siu.jpg"},
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"}
];
//seleccionar al tablero del html 
let tablero = d.querySelector(".tablero");
let nombreImg = []; //GUARDAR LOS NOMBRES DE IMAGENES
let idImg = []; //GUARDAR LOS ID DE IMAGENES



//Funcion para agregar las imagenes al tablero 
function agregarImagenes(){
    //recorrer con un foreach las imagenes del array
    imgN1.forEach((img, i)=>{
        let div = d.createElement("div");//crear div
        div.className = "col-3";//agregar clase al div
        let imagen = d.createElement("img");//crear imagen
        imagen.src = "img/descubir.webp";//agregr la ubicacion de la imagen
        imagen.className = "img-fluid altura";//agregar clase a las imagenes 
        imagen.id = i;//agregar id a la imagen
        imagen.addEventListener("click", mostrarImagenes);
        div.appendChild(imagen);//agregar la imagen al div 
        tablero.appendChild(div);//agregar el div al tablero
    });
}

//funcion para mostrar las imagenes ocultas 
function mostrarImagenes(){
    let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID);
    this.src = imgN1[imgID].url;
    //guardar los nombres de imagen 
    nombreImg.push(imgN1[imgID].NOMBRE);
    //guardar los id de imagenes 
    idImg.push(imgID);

    //activar la funcion de comparar imagenes
    if(nombreImg.length == 2){
        //simular o esperar un tiempo
        setTimeout(compararImagenes, 100);    
    }
}

//funcion para comparar imagenes
function compararImagenes(){
    let allImg = d.querySelectorAll(".tablero .col-3 img");

    //verificar si las imagenes son iguales 
    if(nombreImg[0] == nombreImg[1]){
        alert("Siuuuu adivinaste")
        allImg[idImg[0]].src = "IMG/aprobate.jpg"
        allImg[idImg[1]].src = "IMG/aprobate.jpg"    
    }else{
        alert("Que mal, sigue intentando!!!")
        allImg[idImg[0]].src = "img/descubir.webp"
        allImg[idImg[1]].src = "img/descubir.webp"
    }
    //reiniciar las variables
    nombreImg = [];
    idImg = [];
}

agregarImagenes();