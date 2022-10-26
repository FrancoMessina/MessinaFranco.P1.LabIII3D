export function esconderBtnEliminar(btnEliminar) {
    btnEliminar.classList.remove("visible");
    btnEliminar.classList.add("hidden");
}

export function mostrarBtnEliminar(btnEliminar) {
    btnEliminar.classList.add("visible");
    btnEliminar.classList.remove("hidden");
}