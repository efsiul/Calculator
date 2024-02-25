/* JavaScript para la funcionalidad de la calculadora */

/**
 * Agrega un valor a la pantalla de la calculadora.
 * @param {string} value - El valor a agregar a la pantalla.
 */
function addToScreen(value) {
    var screen = document.getElementById('screen');
    if (screen.innerText === '0') {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

/**
 * Función para limpiar la pantalla
 */
function clearScreen() {
    document.getElementById('screen').innerText = '0';
}

/**
 * Calcula el resultado de la expresión en la pantalla de la calculadora.
 * Reemplaza el operador ^ con ** antes de evaluar la expresión.
 * Si hay un error, muestra 'Error' en la pantalla.
 */
function calculate() {
    try {
        var expression = document.getElementById('screen').innerText;
        expression = expression.replace(/\^/g, "**");
        var result = eval(expression);
        document.getElementById('screen').innerText = result;
    } catch (error) {
        document.getElementById('screen').innerText = 'Error';
    }
}
