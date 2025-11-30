//Simula una cuenta de ahorros con interés compuesto:
//
//Recibe: capital inicial, tasa de interés anual (%), meta de ahorro
//Usa while para calcular cuántos años toma llegar a la meta
//Cada año se aplica el interés sobre el capital acumulado
//Muestra el progreso año por año
//Retorna el número de años necesarios

function simularAhorros(capitalInicial, tasaInteres, meta){

    let capital = capitalInicial;
    let años = 0; 

    console.log("Capital inicial: $" + capital);
    console.log("Meta: $" + meta);
    console.log("_ _ _ _ _ _ _ _ _ _ _ _");

    while(capital < meta){
        años++;
        capital = capital * (1 + tasaInteres / 100)
        console.log("Año" + años + ": $" + capital.toFixed(2));
    }
    
    console.log("_ _ _ _ _ _ _ _ _ _ _ _");
    console.log("Meta alcanzada en " + años + "años");
    return años;

} 

let añosNecesarios = simularAhorros(1000, 10, 2000);
console.log("Resultado: " + añosNecesarios + " años");