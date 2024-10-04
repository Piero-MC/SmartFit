document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const cardNumber = document.getElementById('cardNumber').value;
    const cardholderName = document.getElementById('cardHolderName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simular un procesamiento de pago
    const resultDiv = document.getElementById('result');

    // Validar (simplificado)
    if (cardNumber && cardholderName && expiryDate && cvv) {
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
// Restringir la entrada a números y formatear el campo de fecha de vencimiento (MM/AA)
document.getElementById('expiryDate').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Remover cualquier carácter que no sea número

    if (input.length >= 2) {
        let month = parseInt(input.substring(0, 2), 10); // Tomar los primeros dos dígitos como mes
        if (month < 1 || month > 12) {
            month = ''; // Si el mes no está en el rango de 1 a 12, limpiar el valor
        } else {
            month = ('0' + month).slice(-2); // Asegurar que sea de dos dígitos
        }
        input = month + input.substring(2, 4); // Reinsertar los dos primeros dígitos con el resto
    }

    if (input.length >= 3) {
        input = input.substring(0, 2) + '/' + input.substring(2, 4); // Formatear como MM/AA
    }

    e.target.value = input.substring(0, 5); // Limitar a 5 caracteres (MM/AA)
});

// Restringir la entrada a números en el campo CVV y limitar a 3 dígitos
document.getElementById('cvv').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Remover cualquier carácter que no sea número

    e.target.value = input.substring(0, 3); // Limitar a 3 dígitos
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('paymentForm');
    const cardholderName = document.getElementById('cardholderName');
    const cardholderSurname = document.getElementById('cardholderSurname');
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');
    const payButton = document.getElementById('payButton');

    // Validar que solo se ingresen letras en Nombre y Apellido
    const nameSurnameRegex = /^[A-Za-z\s]+$/;
    cardholderName.addEventListener('input', function () {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    });
    cardholderSurname.addEventListener('input', function () {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    });

    // Validar que solo se ingresen números en Número de Tarjeta y máximo 16 dígitos
    cardNumber.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '-').slice(0, 19);
    });

    // Validar que la fecha tenga formato MM/AA y el mes sea válido (01-12)
    expiryDate.addEventListener('input', function () {
        let input = this.value.replace(/\D/g, '').slice(0, 4);
        if (input.length >= 2) {
            let month = parseInt(input.slice(0, 2), 10);
            if (month > 12 || month < 1) {
                input = '12';  // Si el mes es inválido, lo ajustamos al valor máximo
            }
            input = input.slice(0, 2) + '/' + input.slice(2, 4);
        }
        this.value = input;
    });
    pagoEfectivo.addEventListener('submit',function(event){
        event.preventDefault();
        alert('Pago exitoso');
        form.submit();
    })
    // Validar que solo se ingresen 3 números en CVV
    cvv.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '').slice(0, 3);
    });

    // Validar al enviar el formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Evita que se envíe el formulario de inmediato

        const cardNumberValue = cardNumber.value;
        const expiryDateValue = expiryDate.value;
        const cvvValue = cvv.value;

        // Validar que el número de tarjeta tenga 16 dígitos
        if (cardNumberValue.length !== 19) {
            alert('El número de tarjeta debe tener 16 dígitos');
            return;
        }

        // Validar que la fecha de vencimiento tenga 5 caracteres (MM/AA)
        if (expiryDateValue.length !== 5) {
            alert('La fecha de vencimiento debe tener el formato MM/AA');
            return;
        }

        // Validar que el CVV tenga 3 dígitos
        if (cvvValue.length !== 3) {
            alert('El CVV debe tener 3 dígitos');
            return;
        }

            
       
        // Si todas las validaciones pasan, permite enviar el formulario
        alert('Pago exitoso');
        form.submit();  // Aquí puedes hacer la lógica de enviar los datos al servidor
    });
});
document.getElementById('cardNumber').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Remover cualquier carácter que no sea número
    let formattedInput = '';

    // Agregar guiones cada 4 dígitos
    for (let i = 0; i < input.length; i += 4) {
        if (i > 0) {
            formattedInput += '-'; // Agregar guion antes de los siguientes grupos de 4 dígitos
        }
        formattedInput += input.substring(i, i + 4); // Agregar los dígitos de 4 en 4
    }

    e.target.value = formattedInput; // Actualizar el valor del input
});