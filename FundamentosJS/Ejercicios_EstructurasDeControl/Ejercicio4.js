//Desarrolla un juego donde:
//
//Se genera un número aleatorio entre 1 y 50
//El jugador tiene 5 intentos para adivinarlo
//Das pistas: "muy bajo", "bajo", "cerca", "alto", "muy alto"
//Muestras cuántos intentos quedan
//Declaras victoria o derrota al final

function juegoAdivinanza(){
   
     let numeroSecreto = Math.floor(Math.random() * 50) + 1; 
        let gano = false;

    for(let intento = 1; intento <= 5; intento ++ ){
        
        let numUsuario = Number(prompt("¡Adivina el número!"));
        let diferencia = Math.abs(numUsuario - numeroSecreto);

        if(numUsuario === numeroSecreto){
            alert("¡Adivinaste el número!");
            gano = true;
            break;
        }else if(numUsuario < 1 || numUsuario > 50){
            alert("¡Pasaste el rango establecido!");
            alert("¡Te quedan " + (5 - intento) + " intentos!");
        }else if(diferencia > 15 && numUsuario > numeroSecreto){
            alert("¡Muy alto, sigue intentando!");
            alert("¡Te quedan " + (5 - intento) + " intentos!");
        }else if(diferencia > 15 && numUsuario < numeroSecreto){
            alert("¡Muy bajo, sigue intentando!");
            alert("¡Te quedan " + (5 - intento) + " intentos!");
        }else if(diferencia >= 6 && diferencia <= 15 && numUsuario < numeroSecreto){
            alert("¡Bajo, sigue intentando!");
            alert("¡Te quedan " + (5 - intento) + " intentos!");
        }else if(diferencia >= 6 && diferencia <= 15 && numUsuario > numeroSecreto){
            alert("¡Alto, sigue intentando!");
            alert("¡Te quedan " + (5 - intento) + " intentos!");
        }else if(diferencia >= 1 && diferencia <= 5){
            alert("¡Cerca, muy cerca!");
            alert("¡Te quedan " + (5 - intento) + " intentos!");
        }
    }
    if(!gano){
        alert("Perdiste");
    }

}
juegoAdivinanza()