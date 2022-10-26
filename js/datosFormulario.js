export function modificarAnuncio(formulario, anuncio) {
    anuncio.titulo = formulario.titulo.value;
    anuncio.transaccion = formulario.transaccion.value;
    anuncio.descripcion = formulario.descripcion.value;
    anuncio.precio = formulario.precio.value;
    anuncio.puertas = formulario.puertas.value;
    anuncio.kms = formulario.kms.value;
    anuncio.potencia = formulario.potencia.value;
}


export function cargarFormulario(formulario, anuncio) {
    formulario.titulo.value = anuncio.titulo;
    formulario.transaccion.value = anuncio.transaccion;
    formulario.descripcion.value = anuncio.descripcion;
    formulario.precio.value = anuncio.precio;
    formulario.puertas.value = anuncio.puertas;
    formulario.kms.value = anuncio.kms;
    formulario.potencia.value = anuncio.potencia;
}