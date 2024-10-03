document.addEventListener("DOMContentLoaded", function () {
    // Datos de clientes simulados (esto sería reemplazado por la base de datos)
    const clients = [
        { id: 1, name: "Juan", lastName: "Pérez", dni: "12345678", email: "juan.perez@gmail.com", phone: "987654321" },
        { id: 2, name: "María", lastName: "Gómez", dni: "87654321", email: "maria.gomez@gmail.com", phone: "987654322" },
        { id: 3, name: "Carlos", lastName: "Fernández", dni: "12348765", email: "carlos.fernandez@gmail.com", phone: "987654323" },
        // Otros clientes...
    ];

    const clientTableBody = document.getElementById("clientTableBody");
    const searchDniInput = document.getElementById("searchDni");

    // Función para mostrar los clientes en la tabla
    function renderClients(clientList) {
        clientTableBody.innerHTML = "";
        clientList.forEach(client => {
            const row = `
                <tr>
                    <td>${client.id}</td>
                    <td>${client.name}</td>
                    <td>${client.lastName}</td>
                    <td>${client.dni}</td>
                    <td>${client.email}</td>
                    <td>${client.phone}</td>
                </tr>
            `;
            clientTableBody.innerHTML += row;
        });
    }

    // Mostrar todos los clientes al cargar la página
    renderClients(clients);

    // Filtrar clientes por DNI
    searchDniInput.addEventListener("input", function () {
        const searchValue = searchDniInput.value.trim();
        const filteredClients = clients.filter(client => client.dni.includes(searchValue));
        renderClients(filteredClients);
    });

    // Evento para el botón de registrar cliente
    document.getElementById("registerClient").addEventListener("click", function() {
        alert("Funcionalidad de registro de cliente pendiente de implementar.");
    });
});