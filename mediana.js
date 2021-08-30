function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function calcularMediana(lista){
    let ordenarLista = lista.sort(function(a,b){return a - b});
    console.log(ordenarLista);
    const mitadLista = parseInt(ordenarLista.length / 2);

    function esPar(numerito){
        if(numerito % 2 === 0 ){
            return true;
        } else {
            return false;
        }
    }

let mediana;    

if(esPar(ordenarLista.length)){
   const elemento1 = ordenarLista[mitadLista -1];
   const elemento2  = ordenarLista[mitadLista];

   const promedioElemento1y2 = calcularMediaAritmetica([
       elemento1,
       elemento2,
   ])

   mediana = promedioElemento1y2;
} else {
    mediana = lista[mitadLista];
}

return mediana;
}
