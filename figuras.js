// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();


// Codigo del triangulo

console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm" )


// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de : " + alturaTriangulo + " cm,");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm,");

function areaTriangulo(base, altura) {
    return (base * altura) /2;
} 
console.groupEnd();


// Codigo del circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm, ");


//Diametro
function diametroCirculo(radio) {
    return radio * 2;
} 


//PI
const PI = Math.PI;
console.log("PI es: " + PI + " cm, ");


//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 


//Area
 function areaCirculo (radio) {
     return (radio * radio) * PI;
 }
//  console.log("El area del circulo es: " + areaCirculo + " cm2")

console.groupEnd();


// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}


//Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const base = document.getElementById("InputBaseTriangulo");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(base.value);
    // const value4 = Number(altura.value);

    
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}


function calcularAreaTriangulo() {
    const base = document.getElementById("InputBaseTriangulo");
    const altura = document.getElementById("InputAlturaTriangulo");

    const value1 = Number(base.value);
    const value2 = Number(altura.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}

// Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}



//RETO CLASE 9/24

//Punto#2 del reto: Validacion de que es un triangulo Isosceles
function validarTipoTrianguloYAltura() {
    const input1 = document.getElementById("InputTrianguloIso1");
    const input2 = document.getElementById("InputTrianguloIso2");
    const input3 = document.getElementById("InputTrianguloIso3");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);


 if(value1 === value2 && value1 != value3){
    // alert('Bien! tiene sus dos lados iguales')
    const media = (value3 / 2);
    altura = Math.sqrt((value1 * value1) - (media * media));
    if (value1 + value2 > value3) 
        alert(`Su altura es ${altura}`)
        else alert(`No cumple los requisitos de triangulo isosceles porque la longitud del lado que mide diferente debe ser menor que la suma de los dos lados iguales`)

        }  else if(value1 === value3 && value1 != value2){
                // alert('Bien! tiene sus dos lados iguales');
            const media = (value2 / 2);
            altura = Math.sqrt((value1 * value1) - (media * media));
                if (value1 + value3 > value2) 
                    alert(`Su altura es ${altura}`)
                else alert(`No cumple los requisitos de triangulo isosceles porque la longitud del lado que mide diferente debe ser menor que la suma de los dos lados iguales`)


                } else if(value2 === value3 && value2 != value1){
                //  alert('Bien! tiene sus dos lados iguales')
                 const media = (value1 / 2);
                    altura = Math.sqrt((value2 * value2) - (media * media));
                        if (value2 + value3 > value1) 
                             alert(`Su altura es ${altura}`)
                else alert(`No cumple los requisitos de triangulo isosceles porque la longitud del lado que mide diferente debe ser menor que la suma de los dos lados iguales`)
    } else {
        alert('No es un triangulo isosceles, estos deben tener 2 lados iguales');
    }
}
    