//Carga del Tiempo
cargando();
function cargando() {

    
        window.onload = setTimeout(()=>{
            var contenedor = document.getElementById('contenedor_carga');
            contenedor.style.visibility="hidden";
            contenedor.style.opacity='0';
            console.log("cargando pagina");
        
    },2500);
    
    
    

}

