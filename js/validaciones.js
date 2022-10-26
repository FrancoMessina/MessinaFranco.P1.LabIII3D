const validarCampoVacio = (e) => {
    const input = e.target;
    input.value.trim() ? clearError(input) : setError(input, "Campo requerido");
};

const validarPrecio = (e) => {
    const input = e.target;
    let numero = input.value.trim();
    const pattern = /[^a-z ]\ *([.0-9])*\d/g;
    
    if (pattern.test(numero)){
        numero = parseInt(numero);
        if (numero > 5000 && numero < 5000000){
            clearError(input);
        } else {
            setError(input, "El precio debe ser mayor a 5.000 y menor a 5.000.000");
        }        
    } else {
        setError(input, "Número invalido");
    }
};

const validarPuertas = (e) => {
    
    const input = e.target;
    const numero = parseInt(input.value.trim());
    if (numero  === 2 || numero === 4  || numero === 5 )
        clearError(input); 
    else 
        setError(input, "La cantidad de puertas debe estar entre 2, 4 o 5");
};

const validarKms = (e) => {
    
    const input = e.target;
    const numero = parseInt(input.value.trim());
    if (numero >= 0 && numero < 200000)
        clearError(input); 
    else 
        setError(input, "La cantidad de KMS debe  estar entre 0 y 200000");
};

const validarPotencia = (e) => {
    
    const input = e.target;
    const numero = parseInt(input.value.trim());
    if (numero > 50 && numero < 300)
        clearError(input); 
    else 
        setError(input, "La cantidad de potencia debe estar entre 50 y 300");
};

const setError = (input, mensaje) => {
    const $small = input.nextElementSibling;
    $small.textContent = mensaje || `${input.name} requerido`;
    input.classList.add("inputError");
    $small.classList.add("danger");
};

const clearError = (input, mensaje = "") => {
    const $small = input.nextElementSibling;
    $small.textContent = mensaje;
    input.classList.remove("inputError");
    $small.classList.remove("danger");
};

export function CargarReferenciasControles(controles){
    for (let i = 0; i < controles.length; i++) {
        const control = controles.item(i);
        if (control.matches("input")) {
            if (control.matches("[type=text]") || control.matches("[type=number]")) {
                control.addEventListener("blur", validarCampoVacio);
                if (control.matches("[id=txtPrecio]")) {
                    control.addEventListener("input", validarPrecio);
                    control.addEventListener("blur", validarPrecio);
                } else if (control.matches("[id=numPuertas]")) {
                    control.addEventListener("input", validarPuertas);
                    control.addEventListener("blur", validarPuertas);
                }
                else if (control.matches("[id=numKms]")) {
                    control.addEventListener("input", validarKms);
                    control.addEventListener("blur", validarKms);
                }
                else if (control.matches("[id=numPotencia]")) {
                    control.addEventListener("input", validarPotencia);
                    control.addEventListener("blur", validarPotencia);
                }
            }
        }
    }
}

export function validarFormularioVacio(formulario) {
    if (formulario.titulo.value == "" ||
        formulario.descripcion.value == "" ||
        formulario.precio.value == "" ||
        formulario.kms.value == "" ||
        formulario.potencia.value == "" ||
        formulario.puertas.value == "") {
        return true;
    }
    return false;
}

export function  validarEnviar(formulario) {
    const controles = formulario.elements;
    for (const control of controles) {
        if (control.classList.contains("inputError")) {
            return false;
        }
    }
    return true;
}
