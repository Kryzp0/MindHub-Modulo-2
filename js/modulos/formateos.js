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

let cortarTexto = texto => {
    if (texto.length > 175) {
        return `${texto.slice(0, 175)}...`
    } else {
        return texto
    }
}

export default {
    formatearNumero,
    cambiarPunto,
    cortarTexto
};
