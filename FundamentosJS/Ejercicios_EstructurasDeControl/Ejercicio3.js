//Crea un calculador que convierta una nota numérica (0-100) en una letra:
//
//90-100: A (Excelente)
//80-89: B (Muy Bien)
//70-79: C (Bien)
//60-69: D (Suficiente)
//0-59: F (Insuficiente)
//
//Bonus: Si la nota es mayor a 95, agregar mensaje: "¡Felicitaciones por tu desempeño sobresaliente!"

function calcularNOta(nota){

    if(nota >= 90 && nota <= 100){
        
        if(nota > 95 ){
            console.log("¡Felicitaciones por tu desempeño sobresaliente, tu nota es A!");
        }else{
            console.log("¡Excelente, tu nota es A");
        }

    }else if(nota >= 80 && nota <= 89){
            console.log("¡Muy bien, tu nota es B!");
    }else if(nota >= 70 && nota <= 79){
            console.log("¡Bien, tu nota es C!")
    }else if(nota >= 60 && nota <= 69){
            console.log("¡Suficiente, tu nota es D!");
    }else if(nota >= 0 && nota <= 59){
            console.log("¡Insuficiente, su nota es F!");
    }else{
        console.log("¡Error, nota incorrecta!");
    }
}
calcularNOta(96);