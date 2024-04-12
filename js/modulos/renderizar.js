import creacion from './crearHTML.js'

let renderCard = (array, contenedor) => {
    contenedor.innerHTML = ''
    let template = ''
if (array.length != 0) {
        array.forEach(element =>  template+=creacion.createCard(element))
    } else {
        template = '<h2 class="text-white">Sorry, no movies match your filters. Please try adjusting your selections or search criteria.</h2>'
    }
    contenedor.innerHTML = template
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