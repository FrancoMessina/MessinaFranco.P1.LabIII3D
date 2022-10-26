class Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio) {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
export class Anuncio_Auto extends Anuncio{
    constructor(id, titulo, transaccion, descripcion, precio,kms,puertas,potencia){
        super(id,titulo,transaccion,descripcion,precio)
        this.kms = kms;
        this.puertas = puertas;
        this.potencia = potencia;
    }
}


