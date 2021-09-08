const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

// Variables con precios de producto y envio
let precioRemera  = 1300; 
let precioEnvios = 580;
let valorTotal = suma(precioRemera, precioEnvios);
// Solo si el comprador es de GBA se le hace un descuento de $100
let descuento = prompt( "Es Usted de GBA?");
if((descuento.toLocaleLowerCase() == "si")){
    console.log("El total de su compra es de: ", resta(valorTotal, 100));
}else{
    console.log("El total de su compra es de: ", valorTotal)
}


