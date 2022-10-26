import { cargarAnuncios } from "./administrarDatos.js";
import { crearTarjeta } from "./card.js";

const anuncios = [];
const $cards = document.querySelector("#cards");


cargarAnuncios(anuncios);


anuncios.forEach((elemento) => {
    
    const $nuevaTarjeta = crearTarjeta(elemento);
    $cards.append($nuevaTarjeta);
});
