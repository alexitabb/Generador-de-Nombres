
const nombres = ["Julian", "Abril", "Fernando", "Rosilda", "Tovias", "Lucía", "Pedro", "Sofía", "Blanca", "Elena"];
const apellidos = ["Contreras", "Sanchez", "Ruiz", "González", "Rodríguez", "Cupil", "Lopez", "Mex", "Hernandez", "Chan"];


function generarNombre() {
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
    return `${nombreAleatorio} ${apellidoAleatorio}`;
}

document.getElementById('generar').addEventListener('click', () => {
    const nombreGenerado = generarNombre();
    document.getElementById('nombre-generado').textContent = nombreGenerado;
});
