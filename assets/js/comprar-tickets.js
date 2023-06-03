//identificar la categoría
identificarAsistente = () => {
    const persona = document.getElementById('categoria');
    const asistente = persona.value;
        return asistente;
}

//identificar cantidad
identificarCantidad = () => {
const apuntadorAsistentes = document.getElementById('cantidad')
const valorAsistentes = apuntadorAsistentes.value
const numeroAsistentes = toNumber(valorAsistentes)
    return numeroAsistentes
}

function toNumber(valor) {
    const apuntadorValor = Number(valor);
    return apuntadorValor;
}


/*function calcularEntrada() {
    //identificar categoria
    //const persona = document.getElementById('categoria');
    //const asistente = persona.value;

    //console.log(asistente)

    //identificar cantidad
    const apuntadorAsistentes = document.getElementById('cantidad')
    const valorAsistentes = apuntadorAsistentes.value
    const numeroAsistentes = toNumber(valorAsistentes)

    //apuntador al precio
    const apuntarPrecio = document.getElementById('totalAPagar');
    const asignarPrecio = apuntarPrecio.innerHTML
}*/

function calcularDescuento() {
    let total;
    let unaCantidad = identificarCantidad()
    let unaCategoria = identificarAsistente()

    switch(unaCantidad, unaCategoria) {
        case 'estudiante':
            total = unaCantidad * (200 * 0.2);
            break;
        case 'trainee':
            total = unaCantidad * (200 * 0.5);
            break;
        case 'junior':
            total = unaCantidad * (200 * 0.85);
            break;
        default:
            break;
    }
    //apuntador al precio
    const apuntarPrecio = document.getElementById('totalAPagar');
    apuntarPrecio.innerHTML = total
}

//borrar formulario
const borrarFormulario = () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    categoria.value = "";
    cantidad.value = "";
    totalAPagar.value = "";
}

