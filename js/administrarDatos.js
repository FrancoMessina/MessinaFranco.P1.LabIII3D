function leerAnuncios(anuncios) {
    if (localStorage.getItem("anuncios")) {    
      JSON.parse(localStorage.getItem("anuncios")).forEach((element) => {
        anuncios.push(element);
      });
      return true;
    }
    return false;
  }
  
  export function guardarAnuncios(anuncios){  
    localStorage.setItem("anuncios",JSON.stringify(anuncios));
    return true;
  }
  
  export function cargarAnuncios(anuncios){
    if (!leerAnuncios(anuncios)) {
      if(guardarAnuncios(anuncios)) {
          console.log("Anuncios cargados!");
      }
    }else 
      guardarAnuncios(anuncios);
  }