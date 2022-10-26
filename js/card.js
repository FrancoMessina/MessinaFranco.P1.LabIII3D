export function crearTarjeta(anuncio) {
    const nuevaCarta = document.createElement("div");
    const titulo = document.createElement("h3");
    titulo.textContent = `Titulo: ${anuncio.titulo}`;
    const transaccion = document.createElement("p");
    transaccion.textContent = `Transaccion: ${anuncio.transaccion}`;
    const descripcion = document.createElement("p");
    descripcion.textContent = `Titulo: ${anuncio.descripcion}`;
    const precio = document.createElement("p");
    precio.textContent = `Precio: $${anuncio.precio}`;
    precio.classList.add("precio");
    const imgKms = document.createElement("img");
    imgKms.setAttribute("src","/imgs/kms.png");
    const kms = document.createElement("p");
    kms.textContent = `Kms: ${anuncio.kms}`;
    const puertas = document.createElement("p");
    const imgPuertas = document.createElement("img");
    imgPuertas.setAttribute("src", "/imgs/puerta.png");
    puertas.textContent = `Puertas : ${anuncio.puertas}`;
    const potencia = document.createElement("p");
    const imgPotencia = document.createElement("img");
    imgPotencia.setAttribute("src", "/imgs/potencia.png");
    potencia.textContent = `Potencia: ${anuncio.potencia}`;
    
    nuevaCarta.appendChild(titulo);
    nuevaCarta.appendChild(transaccion);
    nuevaCarta.appendChild(descripcion);
    nuevaCarta.appendChild(precio);
    nuevaCarta.appendChild(kms);
    nuevaCarta.appendChild(imgKms);
    nuevaCarta.appendChild(puertas);
    nuevaCarta.appendChild(imgPuertas);
    nuevaCarta.appendChild(potencia);
    nuevaCarta.appendChild(imgPotencia);
    nuevaCarta.classList.add("card");    

    return nuevaCarta;
}
