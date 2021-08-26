// const precioOriginal = 120;
// const descuento =  18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
// console.log(`El precio original es ${precioOriginal}$`)


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue = inputDiscount.value;

    // Solución #1: arrays y switch
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){
        case "AGO2021" :
            descuento = 15;
            break;

        case "SEPT2021":
            descuento = 30;
            break;

        case "OCT2021":
            descuento = 20;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}