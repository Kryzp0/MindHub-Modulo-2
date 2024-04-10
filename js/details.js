let url = new URLSearchParams(location.search)
let id = url.get("id")
let peliculaPorId = (array, id) => array.find(pelicula => pelicula.id == id)
let contenedorDetalles = document.getElementById("detailsContainer")
let movies = []

import creacion from './modulos/crearHTML.js'

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
        contenedorDetalles.innerHTML = creacion.createDetails(peliculaPorId(movies,id))
    })
    .catch(err => console.log(err))

