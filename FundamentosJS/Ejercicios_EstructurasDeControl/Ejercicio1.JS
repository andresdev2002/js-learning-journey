//Ejercicio: Crea una función que compare dos productos de un carrito de compras. La función debe recibir dos objetos con propiedades precio y cantidad, y determinar:
//
//Si el total de ambos productos es exactamente igual
//Si son diferentes usando comparación estricta
//Cuál producto tiene mayor valor total
//
//javascript// Ejemplo de uso:
//compararProductos({precio: 50, cantidad: 2}, {precio: "100", cantidad: "1"})

function compararProducto(producto1, producto2){


    let totalProducto1 = producto1.precio * producto1.cantidad; 
    let totalProducto2 = producto2.precio * producto2.cantidad;

    console.log(totalProducto1 == totalProducto2);
    console.log(totalProducto1 === totalProducto2);

    if(totalProducto1 > totalProducto2){
        console.log("El valor del producto1 es mayor que el producto2");
    }else if(totalProducto1 < totalProducto2){
        console.log("El valor del producto2 es mayor que el producto1");
    }else{
        console.log("Los valores son iguales");
    }

}
compararProducto({precio: 50, cantidad: 2}, {precio: "100", cantidad: "1"})