let favsContainer = document.getElementById("container")
let movies = []
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

let peliculasPorID = (array, arrayIDs) => array.filter(pelicula=> arrayIDs.includes(pelicula.id))

import renderizar from "./modulos/renderizar.js"

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
        console.log(favsID);
        renderizar.renderCard(peliculasPorID(movies,favsID), favsContainer)
    })
    .catch(err => console.log(err))