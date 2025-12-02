//Crea un generador de contraseñas que:
//
//Use do-while para generar contraseñas aleatorias
//Continúe generando hasta que cumpla TODOS estos requisitos:
//
//Al menos 8 caracteres
//Al menos una mayúscula
//Al menos una minúscula
//Al menos un número
//Al menos un carácter especial (!@#$%^&*)
//
//
//Muestre cuántos intentos tomó
//Retorne la contraseña generada

function generarContraseñaSegura(){
    let contraseña;
    let intentos = 0;
    let esValida = false;

    do {
        intentos++;
        contraseña = generarContraseña(10); //Genera 10 caracteres 

        //Verificar los requisitos
        if(contraseña.length >= 8 && tieneMayusculas(contraseña)
        && tieneMinusculas(contraseña) && tieneNumero(contraseña)
        && tieneEspecial(contraseña)){
            esValida = true;
        }
    } while (!esValida);
    console.log("Contraseña generada: " + contraseña);
    console.log("Intentos necesarios: " + intentos);
    return contraseña; 
}

function generarContraseña(longitud){
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let contraseña = "";
    for(let i = 0; i < longitud; i++){
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        contraseña += caracteres[indiceAleatorio];
    }
    return contraseña; 
}

//Funciones para verificar los requisitos con expresiones regulares(Regex)
function tieneMayusculas(texto){
    return /[A-Z]/.test(texto);
}
function tieneMinusculas(texto){
    return /[a-z]/.test(texto);
}
function tieneNumero(texto){
    return /[0-9]/.test(texto);
}
function tieneEspecial(texto){
    return /[!@#$%^&*]/.test(texto);
}
let miContraseña = generarContraseñaSegura();
console.log("Puedo usar la contraseña: " + miContraseña);