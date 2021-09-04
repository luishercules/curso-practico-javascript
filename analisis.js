//Helpers o Utils 
function esPar(numerito){
    return (numerito % 2 === 0);
 }

 function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length /2);

    if (esPar(lista.length)) {
       const personitaMitad1 = lista[mitad -1];
       const personitaMitad2 = lista[mitad];

       const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
       return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//MedianaGeneral
 const salariosHon = honduras.map(
     function (personita) {
        return personita.salary;
     }
 );


 const salariosHonSorted = salariosHon.sort(
     function(salaryA, salaryB){
        return salaryA - salaryB;
     }
 );

 
const medianaGeneralHon =  medianaSalarios(salariosHonSorted);
     
//Mediana del top 10%
const spliceStart = parseInt(salariosHonSorted.length * 90) /100;
const spliceCount = salariosHonSorted.length - spliceStart;

const salariosHonTop10 = salariosHonSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Hon =  medianaSalarios(salariosHonTop10);


 console.log({
     medianaGeneralHon,
     medianaTop10Hon,
 });