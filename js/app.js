import { Anuncio_Auto } from "./anuncio.js";
import { actualizarTabla } from "./tablaDinamica.js"
import { CargarReferenciasControles, validarFormularioVacio, validarEnviar } from "./validaciones.js";
import { guardarAnuncios, cargarAnuncios } from "./administrarDatos.js";
import { cargarFormulario, modificarAnuncio } from "./datosFormulario.js";
import { mostrarSpinner, esconderSpinner } from "./spinner.js";
import { mostrarBtnEliminar, esconderBtnEliminar } from "./botones.js";
const anuncios = [];

const $divTabla = document.querySelector(".divTabla");
const $btnReset = document.querySelector("#btnReset");
const $btnEliminar = document.querySelector("#btnEliminar");
const $formulario = document.forms[0];
const $mensajeEnviar = document.getElementById("mensajeEnviar");
const $btnEnviar = document.querySelector("#btnEnviar");
const $spinner = document.querySelector("#spinner");
let idSeleccionado;
const controles = $formulario.elements;


cargarAnuncios(anuncios);

actualizarTabla($divTabla,anuncios);

window.addEventListener("load", () => {
    esconderBtnEliminar($btnEliminar);
    esconderSpinner($spinner);

    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!validarFormularioVacio($formulario) && validarEnviar($formulario)) {
            $mensajeEnviar.textContent = "";
            $mensajeEnviar.classList.remove("danger");

            if ($btnEnviar.value == "Guardar") {
                const { titulo, transaccion, descripcion, precio, puertas, kms, potencia } = e.target;
                const nuevoAnuncio = new Anuncio_Auto(Date.now(), titulo.value, transaccion.value, descripcion.value, precio.value, kms.value, puertas.value, potencia.value);
                
                mostrarSpinner($spinner);
                setTimeout(() => {
                    anuncios.push(nuevoAnuncio);
                    guardarAnuncios(anuncios);
                    actualizarTabla($divTabla,anuncios);
                    esconderSpinner($spinner);
                }, 3000);
            } else if ($btnEnviar.value == "Modificar") {
                const anuncio = anuncios.find((element) => element.id == idSeleccionado);
                mostrarSpinner($spinner);
                setTimeout(() => {
                    modificarAnuncio($formulario,anuncio);
                    actualizarTabla($divTabla,anuncios);
                    guardarAnuncios(anuncios);
                    esconderSpinner($spinner);
                }, 3000);
                
                
            }
        } else {
            $mensajeEnviar.classList.add("danger");
            $mensajeEnviar.textContent = "Completar campos de manera correcta";
            
        }
    });
});


$divTabla.addEventListener("click", (e) => {
    $mensajeEnviar.textContent = "";
    $mensajeEnviar.classList.remove("danger");
    const emisor = e.target;
    if (emisor.matches("tbody tr td")) {
        let id = emisor.parentElement.dataset.id;
        const anuncio = anuncios.find((element) => element.id == id);
        idSeleccionado = id;
        cargarFormulario($formulario,anuncio);
        mostrarBtnEliminar($btnEliminar);
        $btnEnviar.value = "Modificar";
    }
});

$btnReset.addEventListener("click", () => {
    $btnEnviar.value = "Guardar";
    esconderBtnEliminar($btnEliminar);
});

$btnEliminar.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Queire eliminar el anuncio seleccionado.")) {
        eliminarAnuncio();
        $btnEnviar.value = "Guardar";
    };
});

function eliminarAnuncio() {
    const anuncio = anuncios.find((element) => element.id == idSeleccionado);
    let index = anuncios.indexOf(anuncio);
    anuncios.splice(index, 1);
    guardarAnuncios(anuncios); 
    actualizarTabla($divTabla,anuncios);
    esconderBtnEliminar($btnEliminar);
}


CargarReferenciasControles(controles);