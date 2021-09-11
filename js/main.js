const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

/*Aqui comienza el simulador de un catalogo y carrito, más la suma del costo de envio y, 
ademas, un descuento si es de GBA.
*/

alert ("Bienvenido/a a Luxana's Road")
let nombreCliente = prompt (" Por favor, ingresa tu nombre para una mejor atención")

const catalogo = [

    producto1 = {
        id: 1,
        nombre: "Remeras Personalizadas",
        precio: 1300,
    },

    producto2 = {
        id: 2,
        nombre: "Tazas",
        precio: 550,
    },

    producto3 = {
        id: 3,
        nombre: "Fundas de Celulares",
        precio: 650,
    },

    producto4 = {
        id: 4,
        nombre: "Cuadros Personalizados",
        precio: 1000,
    },

    producto5 = {
        id: 5,
        nombre: "Fundas para Almohadones",
        precio: 600,
    },

    producto6 = {
        id: 6,
        nombre: "Gorras tipo Trucker",
        precio: 800,
    } 
];

let total = 0;
let carrito = [] ;
console.log(carrito);

function aniadirAlCarrito(producto){
    carrito.push(producto);
}

aniadirAlCarrito(producto2);
aniadirAlCarrito(producto3);
aniadirAlCarrito(producto1);
aniadirAlCarrito(producto4);

console.log(carrito);

function calcularTotal(){

    for (let i = 0; i < carrito.length; i++) {
        total = total+carrito[i].precio
    }

    console.log(total)
}

calcularTotal()

let precioEnvios = 580;
let valorTotal = suma(total, precioEnvios);
// Solo si el comprador es de GBA se le hace un descuento de $100
let descuento = prompt( "Es Usted de GBA?");
if((descuento.toLocaleLowerCase() == "si")){
    console.log("El total de su compra es de: ", resta(valorTotal, 100));
}else{
    console.log("El total de su compra es de: ", valorTotal)
}


