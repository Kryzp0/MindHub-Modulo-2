let url = new URLSearchParams(location.search)
let id = url.get("id")
console.log(id);
let peliculaPorId = (array, id) => array.find(pelicula => pelicula.id == id)
console.log(peliculaPorId(movies,id));

let contenedorDetalles = document.getElementById("detailsContainer")


let formatearNumero = numero => {
    let numeroComoTexto = numero.toString();
    let partes = [];
    while (numeroComoTexto.length > 3) {
        // Se toman los últimos 3 digitos del string y se agregan al inicio del array vacío
        partes.unshift(numeroComoTexto.slice(-3));
        // Se actualiza el string para que ya no incluya los numeros que se sacaron
        numeroComoTexto = numeroComoTexto.slice(0, -3);
    }
    // Se agregan los numeros restantes al inicio del array quedando un conjunto de strings de 3 digitos cada uno
    partes.unshift(numeroComoTexto);
    // Se retorna un único string compuesto por la concatenación de un punto entre cada uno de los string dentro del array
    return partes.join('.');
}

let cambiarPunto = numero => numero.toString().replace('.',',')

let createDetails = objeto => `<div class="flex flex-wrap justify-center w-[90%] pt-8 gap-4 md:justify-around">
<div class="md:w-5/12 h-[300px]">
    <img class="h-full object-cover object-center" src="${objeto.image}" alt="a image of ${objeto.title}">
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
            <td class="border p-2">${cambiarPunto(objeto.vote_average)} %</td>
        </tr>
        <tr>
            <th class="border p-2">budget</th>
            <td class="border p-2">USD ${formatearNumero(objeto.budget)}</td>
        </tr>
        <tr>
            <th class="border p-2">revenue</th>
            <td class="border p-2">USD ${formatearNumero(objeto.revenue)}</td>
        </tr>
    </tbody>
</table>
</article>`

contenedorDetalles.innerHTML= createDetails(peliculaPorId(movies,id))