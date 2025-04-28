document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    const verDetallesButton = document.querySelectorAll('.verDetalles');
    const volverButton = document.querySelectorAll('.volver');
    const tarjeta = document.querySelectorAll('.tarjeta');
    // Función para voltear la tarjeta
    verDetallesButton.forEach((button, index) => {
        button.addEventListener('click', function () {
            tarjeta[index].classList.add('girar');
            console.log('aa');
        });
    });
    // Función para volver a la cara frontal
    volverButton.forEach((button, index) => {
        button.addEventListener('click', function () {
            tarjeta[index].classList.remove('girar');
        });
    });
});
