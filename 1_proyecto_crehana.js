// este es el avance dos; El código calcula el IVA (18% -> 0.18) y precio final de un producto.

// declaracion de variables 
const iva = 0.18;
let Total;

// funcion que hace el calculo
function calcularIva(precio){
    let ivaProducto = precio * iva;
    let Total = precio - ivaProducto;
    console.log(`El IVA del producto es de: ${ivaProducto} pesos mexicanos.`)
    console.log(`El precio final del producto es de: ${Total} pesos mexicanos.`)
}
