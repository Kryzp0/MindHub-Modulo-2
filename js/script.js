let container = document.getElementById("container")

let createCard = array => `<div class="h-[430px] w-[320px] bg-[#adadad] rounded-3xl p-4">
    <img class="h-[50%] object-cover" src="${array.image}" alt="${array.title}">
    <div>
        <h3 class="font-semibold text-lg">${array.title}</h3>
        <h4 class="italic font-light">${array.tagline}</h4>
        <p class="text-sm">${cortarTexto(array.overview)}</p>
    </div>
    </div>`


let cortarTexto = texto => {
    if (texto.length>230) {
       return`${texto.slice(0,230)}...`
    } else {
       return texto
    }
}

let renderCard = (array,contenedor) => {
    let template = ''
    for (const iterator of array) {
        template += createCard(iterator)
    }
    contenedor.innerHTML = template
}

renderCard(movies,container)
