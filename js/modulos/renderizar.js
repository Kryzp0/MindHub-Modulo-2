import creacion from './crearHTML.js'

let renderCard = (array, contenedor) => {
    console.log("renderizando");
    let template = ''
    contenedor.innerHTML = template
if (array.length != 0) {
        array.forEach(element =>  template+=creacion.createCard(element))
    } else {
        template = '<h2 class="text-white">Sorry, no movies match your filters. Please try adjusting your selections or search criteria.</h2>'
    }
    contenedor.innerHTML = template
    console.log("se terminó");
}

let renderCheckbox = (array, contenedor) => {
    let template = ''
    array.forEach(element =>  template += creacion.crearCheckbox(element));
    contenedor.innerHTML = template
}

export default {
    renderCard,
    renderCheckbox
};