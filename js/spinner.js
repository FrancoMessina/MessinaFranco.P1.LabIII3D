export function mostrarSpinner(spinner){
    spinner.classList.add("spinnerVisible");
    spinner.classList.add("lds-dual-ring");
    spinner.classList.remove("spinnerHidden");
}
export function esconderSpinner(spinner){
    spinner.classList.remove("spinnerVisible");
    spinner.classList.remove("lds-dual-ring");
    spinner.classList.add("spinnerHidden");
}