import formateos from './formateos.js'

let createDetails = objeto => `<div class="flex flex-wrap justify-center w-[90%] pt-8 gap-4 md:justify-around">
    <div class="md:w-5/12 h-[300px]">
        <img class="h-full object-cover object-center" src="https://moviestack.onrender.com/static/${objeto.image}" alt="a image of ${objeto.title}">
    </div>
    <div class="flex flex-col gap-4 md:w-5/12 p-2">
        <h2 class="font-semibold text-lg">${objeto.title}</h2>
        <h3 class="font-light">${objeto.tagline}</h3>
        <h4 class="italic">${objeto.genres}</h4>
        <p>${objeto.overview}</p>
    </div>
    </div>
    <article class="flex flex-wrap justify-center w-[90%] pb-8 md:justify-around">
        <table class="text-left p-2 m-2 border md:w-5/12">
            <tbody>
                <tr>
                    <th class="border p-2">original language</th>
                    <td class="border p-2">${objeto.original_language}</td>
                </tr>
                <tr>
                    <th class="border p-2">release date</th>
                    <td class="border p-2">${objeto.release_date}</td>
                </tr>
                <tr>
                    <th class="border p-2">runtime</th>
                    <td class="border p-2">${objeto.runtime} mins</td>
                </tr>
                <tr>
                    <th class="border p-2">status</th>
                    <td class="border p-2">${objeto.status}</td>
                </tr>
            </tbody>
        </table>
    <table class="text-left m-2 p-2 border md:w-5/12">
        <tbody>
            <tr>
                <th class="border p-2">vote average</th>
                <td class="border p-2">${formateos.cambiarPunto(objeto.vote_average)} %</td>
            </tr>
            <tr>
                <th class="border p-2">budget</th>
                <td class="border p-2">USD ${formateos.formatearNumero(objeto.budget)}</td>
            </tr>
            <tr>
                <th class="border p-2">revenue</th>
                <td class="border p-2">USD ${formateos.formatearNumero(objeto.revenue)}</td>
            </tr>
        </tbody>
    </table>
    </article>`

    let createCard = objeto => {

    let favsID = JSON.parse(localStorage.getItem('favsID')) || []
    
    return `<div class="relative h-[430px] w-[320px] bg-[#adadad] rounded-3xl p-4 flex flex-col">
        <img class="h-[50%] object-cover mt-2 border border-black" src="https://moviestack.onrender.com/static/${objeto.image}" alt="${objeto.title}">
            <div class="flex-1">
                <h3 class="font-semibold text-lg">${objeto.title}</h3>
                <h4 class="italic font-light">${objeto.tagline}</h4>
                <p class="text-sm">${formateos.cortarTexto(objeto.overview)}</p>
                <div class='text-3xl text-center absolute top-3 right-2' data-id="${objeto.id}">
                ${favsID.includes(objeto.id)?
                `<ion-icon class="active" name="heart" data-id="${objeto.id}">
                    <div class='red-bg' data-id="${objeto.id}"></div>
                </ion-icon>`:
                `<ion-icon name="heart" data-id="${objeto.id}">
                    <div class='red-bg' data-id="${objeto.id}"></div>
                </ion-icon>` 
            }
                </div>
            </div>
                <a class="mt-auto text-lg hover:text-white" href="./details.html?id=${objeto.id}">See more</a>
        </div>`
}


let crearCheckbox = nombre => `<label>${nombre}
        <input type="checkbox" name="${nombre}" value="${nombre}">
    </label>`

export default {
    createDetails,
    createCard,
    crearCheckbox
};
    