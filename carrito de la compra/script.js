// Función para calcular el total del carrito y aplicar descuento si es necesario
function calcularTotal() {
    var product1 = parseFloat(document.getElementById('product1').value) || 0;
    var product2 = parseFloat(document.getElementById('product2').value) || 0;
    var product3 = parseFloat(document.getElementById('product3').value) || 0;
    var product4 = parseFloat(document.getElementById('product4').value) || 0;
    var product5 = parseFloat(document.getElementById('product5').value) || 0;

    var total = product1 + product2 + product3 + product4 + product5;
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Limpiamos el contenido del div

    if (total >= 100) {
        var descuento = total * 0.15;
        var precioConDescuento = total - descuento;
        outputDiv.innerHTML = 'Total (sin descuento): ' + total.toFixed(2) + ' euros<br>';
        outputDiv.innerHTML += 'Total con descuento (15%): ' + precioConDescuento.toFixed(2) + ' euros';
    } else {
        outputDiv.innerHTML = 'Total: ' + total.toFixed(2) + ' euros';
    }
}
