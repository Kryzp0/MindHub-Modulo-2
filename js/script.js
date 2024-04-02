let container = document.getElementById("container")

let createCard = array => {
    let muchoTexto
    if (array.overview.length>230) {
        muchoTexto = `${array.overview.slice(0,230)}...`
    } else {
        muchoTexto = array.overview
    }

    return `<div class="h-[430px] w-[320px] bg-[#adadad] rounded-3xl p-4">
    <img class="h-[50%] object-cover" src="${array.image}" alt="${array.title}">
    <div>
        <h3 class="font-semibold text-lg">${array.title}</h3>
        <h4 class="italic font-light">${array.tagline}</h4>
        <p class="text-sm">${muchoTexto}</p>
    </div>
    </div>`
}

let renderCard = (array,contenedor) => {
    for (const iterator of array) {
        contenedor.innerHTML += createCard(iterator)
    }
}

renderCard(movies,container)
