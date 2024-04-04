window.addEventListener('load', function(){
 console.log("pagina cargada");
 
 var imagenes = [];
 imagenes[0]= 'img/imagen1.jpg';
 imagenes[1]= 'img/imagen2.jpg';
 imagenes[2]= 'img/imagen3.jpg';
 imagenes[3]= 'img/imagen4.jpg';


 var indiceImagenes = 0;


 function cambiarImagenes(){
   
    document.slider.src = imagenes[indiceImagenes];

    if (indiceImagenes < 3) {
        indiceImagenes++;
        
    }else{
        indiceImagenes = 0;
    }

 }
 setInterval(cambiarImagenes, 2000);
 
 
 
});

