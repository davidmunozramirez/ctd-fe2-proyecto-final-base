function mayusculaPrimeraLetra(palabra: string) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}


function mayusculaAlInicioDeCadaPalabra(objeto: any ){
    return objeto.titulo.split(" ").map( (cadaPalabra: string) => mayusculaPrimeraLetra(cadaPalabra) ).join(" ")
}

function calcularDirefenciaEnMinutos(objeto: any) {
    const ahora = new Date();
    return Math.floor( ( ahora.getTime()  -  objeto.fecha.getTime() ) / 60000 );
}


export { mayusculaAlInicioDeCadaPalabra, calcularDirefenciaEnMinutos };