document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simular un procesamiento de pago
    const resultDiv = document.getElementById('result');

    // Validar (simplificado)
    if (cardNumber && cardHolder && expiryDate && cvv) {
        resultDiv.innerHTML = `<p style="color: green;">¡Pago procesado con éxito!</p>
                               <p>Detalles de la transacción:</p>
                               <p>Número de tarjeta: ${cardNumber}</p>
                               <p>Nombre del titular: ${cardHolder}</p>`;
    } else {
        resultDiv.innerHTML = '<p style="color: red;">Por favor, completa todos los campos.</p>';
    }

    // Limpiar el formulario
    document.getElementById('paymentForm').reset();
});