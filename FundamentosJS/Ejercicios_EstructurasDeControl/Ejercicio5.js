//Ejercicio 5: Calculadora de Impuestos con Switch
//Recordatorio del ejercicio:
//Crea una calculadora de impuestos según el tipo de producto:
//
//"alimentos": 0% impuesto
//"ropa": 10% impuesto
//"electrónicos": 19% impuesto
//"lujo": 30% impuesto
//"servicios": 16% impuesto
//
//La función debe recibir el tipo de producto y el precio base, y retornar el precio final con impuestos incluidos.

function calcularImpuestos(TipoProducto, precioBase){

    let precioFinal

    switch(TipoProducto){
        case "alimentos":
            precioFinal = precioBase;
        break;
        case "ropa":
            precioFinal = precioBase * 1.10;
            break;
        case "electronicos":
            precioFinal = precioBase * 1.19;
            break;
        case "lujo":
            precioFinal = precioBase * 1.30;
        break;
        case "servicios":
            precioFinal = (precioBase * 1.16);
            break;
        default:
            console.log("Tipo de producto no válido");
            return 0; 
    }

    return precioFinal;

    }

console.log(calcularImpuestos("servicios", 200));

