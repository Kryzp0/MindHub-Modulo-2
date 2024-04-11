let movies = []
let container = document.getElementById("container")
let contenedorCheckboxs = document.getElementById("checkboxs")
let inputTexto = document.getElementById("search")

import renderizar from "./modulos/renderizar.js"

// Se guarda en un nuevo array plano cada propiedad genres, debe ser plano para asegurar que solo sea un array y poder guardar en un Set evitando que se repita cada genero
let generos = array => new Set(array.flatMap(e => e.genres))

let generosSeleccionados = []
let textoIngresado = ''
contenedorCheckboxs.addEventListener("change", (e) => {
    // Se agrega al array el valor de todos los input de tipo checkbox que estén checkeados
    generosSeleccionados = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value)
    renderizar.renderCard(peliculasPorTexto(peliculasPorCheck(movies, generosSeleccionados), textoIngresado), container)
})
inputTexto.addEventListener("input", (e) => {
    textoIngresado = e.target.value.trim().toLowerCase()
    renderizar.renderCard(peliculasPorTexto(peliculasPorCheck(movies, generosSeleccionados), textoIngresado), container)
})

let peliculasPorCheck = (array, arrayChecks) => {
    if (generosSeleccionados.length == 0) {
        return array
    } else {
        // Con includes se verifica si generos seleccionados incluye el algun genero del array dentro de la propiedad genres del objeto[0] dentro de movies
        // Con some se itera en el array genres para usar cada elemento como parametro en el metodo includes
        return array.filter(pelicula => pelicula.genres.some(genero => arrayChecks.includes(genero)))
    }
}
let peliculasPorTexto = (array, textoIngresado) => array.filter(pelicula => pelicula.title.toLocaleLowerCase().includes(textoIngresado))

fetch('https://moviestack.onrender.com/api/movies',
    {
        headers:
        {
            'X-API-Key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
        }
    })
    .then(res => res.json())
    .then(data => {
        movies = data.movies
        console.log(movies);
        renderizar.renderCheckbox(generos(movies), contenedorCheckboxs)
        renderizar.renderCard(movies, container)
    })
    .catch(err => console.log(err))


let favsID = JSON.parse(localStorage.getItem('favsID')) || []
container.addEventListener("click", (e) => {
    let peliculaID = e.target.dataset.id
    if (peliculaID) {
        if (favsID.includes(peliculaID)) {
            // Si ya está incluido, se filtra el array con todos los elementos que no coincidan con el ID seleccionado
            favsID = favsID.filter(id => id !== peliculaID);
        } else {
            favsID.push(peliculaID);
        }
        localStorage.setItem('favsID', JSON.stringify(favsID))
    }
    console.log(favsID);
})
