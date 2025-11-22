//Desarrolla un sistema de validación de acceso a un club exclusivo. Una persona puede entrar si:
//
//Tiene membresía VIP O (tiene invitación Y es mayor de edad)
//NO está en la lista de prohibidos
//
//La función debe recibir un objeto con: tieneMembresia, tieneInvitacion, edad, estaProhibido

function validarAcceso(persona){
    

    if(!persona.estaProhibido && (persona.tieneMembresia || (persona.tieneInvitacion && persona.edad >=18))){
        console.log("¡Acceso concedido! puedes ingresar al Clud");
    }else{
        console.log("¡Acceso denegado! no puede ingresar al Clud" );
    }
}

validarAcceso(
    {
        estaProhibido: false,
        tieneMembresia: true,
        tieneInvitacion: true,
        edad:15
    }
);