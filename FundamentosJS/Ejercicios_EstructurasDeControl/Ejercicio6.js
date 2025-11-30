//Crea un programa que genere tablas de multiplicar:
//Recibe un array de números (ej: [3, 7, 9])
//Para cada número, mostrar su tabla del 1 al 10
//Formato: "3 x 1 = 3"
//Dejar una línea en blanco entre cada tabla

function tablasMultiplicar(numeros){

    for(let i = 0; i < numeros.length; i++ ){
        for(let multiplicador = 1; multiplicador <= 10; multiplicador ++){

            let total = numeros[i] * multiplicador;
            console.log(numeros[i] + " X " + multiplicador + " = " + total );

        }
        console.log(" ");
    }

}
tablasMultiplicar( [3, 7, 9] );