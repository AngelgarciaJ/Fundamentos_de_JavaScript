// Este es el avance dos; El código calcula el IVA (18% -> 0.18) y precio final de un producto.
// Este ejemplo es dado por: Cristian Moreno
//---------------------------------------------------------------------------------------------
/*

// declaracion de variables 
let iva = 0.18;
let Total;

// funcion que hace el calculo
function calcularIva(precio){
  let ivaProducto = precio * iva;
  console.log(`el IVA (PE) del producto es ${ivaProducto}`)
  total = precio - ivaProducto; 
  console.log(`El precio final del producto es de: ${Total} SOLES.`) 
}

*/
// #######################################################################################

// Este es el avance tres; Una pequeña calculadora IVA (18%), que calcula: nombre de los productos precio,
// precio final del producto, precio del IVA de cada producto y precio final a pagar de todos los productos.
// -----------------------------------------

// declaracion de variables 
let productos = [];
let subtotal = 0;
let totalIva = 0;
let total = 0;
let sumaTotal = 0;
let sumaIva;
let sumaPrecioFinal;

// calcula el IVA 
function calcularIva(precio) {
  let ivaProducto = precio * 0.18;
  totalIva = totalIva + ivaProducto
  return ivaProducto;
}

// agraga un producto, calcula el descuento por producto y calcula el IVA.  
function agregarProducto(nombre, precio, descuentoTipo) {
  let precioDescuento;
  let descuento;
  let ivaProducto;

  if (descuentoTipo) {
    switch (descuento) {
      case 1:
        precioDescuento = precio - (precio * 0.14)
        break;
      case 2:
        precioDescuento = precio - (precio * 0.11)
        break;
      default:
        precioDescuento = precio - (precio * 0.05)
        break

    }  
  }
    
  if (precioDescuento) {
    ivaProducto = calcularIva(precioDescuento);
    subtotal = subtotal + (precioDescuento - ivaProducto);
    total = total + precioDescuento;
  } else {
    ivaProducto = calcularIva(precio)
    subtotal = subtotal + (precio - ivaProducto);
    total = total + precio;
  }
    
  const producto = {
    nombre: nombre,
    precio,
    precioFinal: precioDescuento ? precioDescuento : undefined,
    valorIva: ivaProducto,

  };
  productos.push(producto)
};

// calcula el sumatoria total 
function facturar() {
  for (let i = 0; i < productos.length ; i++) {
    sumaTotal += productos[i].precioFinal
  }
  console.log(productos) 
  console.log(`El total a pagar es de: $${sumaTotal}.`)

}
