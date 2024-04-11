// Función para imprimir los números pares entre dos números
function imprimirNumerosPares() {
    var start = parseInt(document.getElementById('start').value);
    var end = parseInt(document.getElementById('end').value);
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Limpiamos el contenido del div

    // Verificar si los valores ingresados son números válidos
    if (isNaN(start) || isNaN(end)) {
        outputDiv.innerHTML = 'Por favor, ingrese números válidos.';
        return;
    }

    // Bucle for para imprimir los números pares entre los dos números ingresados
    for (var i = start; i <= end; i++) {
        if (i % 2 === 0) {
            outputDiv.innerHTML += i + '<br>';
        }
    }
}

// Asociar la función con un evento
document.getElementById('start').addEventListener('input', imprimirNumerosPares);
document.getElementById('end').addEventListener('input', imprimirNumerosPares);
