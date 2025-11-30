//Desarrolla un analizador de texto que:
//
//Reciba un array de palabras
//Cuente cuántas vocales tiene cada palabra usando for-of
//Identifique la palabra con más vocales
//Retorne un objeto con: total de vocales por palabra y la palabra ganadora

function contarVocales(palabras){
 
    let resultado = {}; //Guardar vocales de cada palabra
    let maxVocales = 0;//Rastrear el maximo de vocales
    let palabraGanadora = "";//Guardar cual tiene mas vocales
    let vocales = "AEIOUaeiou";

    for(let palabra of palabras){
        let contadorVocales = 0;
        
        for(let letra of palabra){
            if(vocales.includes(letra)){
                contadorVocales ++; 
            }
        }
        
        resultado[palabra] = contadorVocales
        if(contadorVocales > maxVocales ){
            maxVocales = contadorVocales;
            palabraGanadora = palabra;
        }
    }
    return{
        vocalesPorPalabras: resultado,
        palabraConMasVocales: palabraGanadora,
        cantidadDeVocales: maxVocales

    }
}
let resultado = contarVocales(["programacion", "javascript", "codigo"]);
console.log(resultado);