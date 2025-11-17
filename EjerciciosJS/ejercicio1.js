
const btnSaludo = document.getElementById('btn');
btnSaludo.textContent = "Saludar";
const saludo = document.getElementById('saludo');

btnSaludo.addEventListener('click', function(){
    const mensaje = document.createElement('p');
    mensaje.textContent = "Hola, mi nombre es Andres Calderon";
    saludo.appendChild(mensaje);

})