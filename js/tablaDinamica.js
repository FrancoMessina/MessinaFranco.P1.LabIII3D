function crearCabecera(row) {
    const cabecera = document.createElement("thead"),
        tr = document.createElement("tr");

    for (const key in row) {
        if (key === "id") continue;
        const th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);
    }

    cabecera.appendChild(tr);
    return cabecera;
}

function crearCuerpo(data) {
    const cuerpo = document.createElement("tbody");

    data.forEach(elemento => {
        const fila = document.createElement("tr");
        for (const atributo in elemento) {
            if (atributo === "id") {
                fila.setAttribute("data-id", elemento[atributo]);
                continue;
            }
            const celda = document.createElement("td");
            celda.textContent = elemento[atributo];
            fila.appendChild(celda);
            fila.classList.add("puntero");
        }

        const filas = cuerpo.children;

        for (let i = 0; i < filas.length; i++){
            if ( !(i % 2) ){
                filas[i].classList.add("gris");
            }
        }

        cuerpo.appendChild(fila);
    });
    return cuerpo;
}

function crearTabla(data) {
    if (!Array.isArray(data)) {
        return null;
    }

    const tabla = document.createElement("table");
    tabla.classList.add("centrar");
    tabla.appendChild(crearCabecera(data[0]));
    tabla.appendChild(crearCuerpo(data));

    return tabla;
}

export function actualizarTabla(divTabla, anuncios) {
    while (divTabla.hasChildNodes()) {
        divTabla.removeChild(divTabla.firstChild);
    }
    divTabla.appendChild(crearTabla(anuncios));
}