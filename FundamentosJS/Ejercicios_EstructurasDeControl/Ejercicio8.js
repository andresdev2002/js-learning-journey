//Crea un sistema de inventario. Dado un objeto donde las claves son nombres de productos y los valores son sus cantidades:
//
//Usa for-in para recorrer el inventario
//Identifica productos con stock bajo (menos de 5 unidades)
//Calcula el total de items en inventario
//Crea una lista de productos que necesitan reabastecimiento
function analizarInventario(inventario){

    let totalItems = 0;
    let stockBajo = [];//Array para productos con stock bajo

    for(let producto in inventario){
        let cantidad = inventario[producto];

        //Sumar tottal
        totalItems += cantidad; 

        //Verificar si tiene un stock bajo

        if(cantidad < 5){
            stockBajo.push(producto);

        }
    }

    return{
        totalItems: totalItems,
        productoStockBajo: stockBajo,
        cantidadProductosStockBajo: stockBajo.length   
    }
}

let  miInventario = {
    "laptops": 3,
    "teclados": 15,
    "ratones": 2,
    "monitores": 8
}

let resultado = analizarInventario(miInventario);
console.log(resultado);
