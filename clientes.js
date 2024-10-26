document.addEventListener("DOMContentLoaded", function () {
    // Datos de clientes simulados (esto sería reemplazado por la base de datos)

    const clientTableBody = document.getElementById("clientTableBody");
    const searchDniInput = document.getElementById("searchDni");
    
    // Función para mostrar los clientes en la tabla
    function renderClients(clientList) {
        clientTableBody.innerHTML = "";
        clientList.forEach((client, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td> <!-- ID generado dinámicamente -->
                    <td>${client.name}</td>
                    <td>${client.dni}</td>
                    <td>${client.email}</td>
                    <td>${client.phone}</td>
                    <td>${client.subscription}</td>
                    <td>${client.months}</td>
                    <td>${client.fechaRegistro}</td>
                    <td>${client.fechaFin}</td>
                    <td><a href="renovacion.html" class="btn-renew" data-id="${index}">renovar</a></td>
                </tr>
            `;
            clientTableBody.innerHTML += row;
        });
    }
    
    // Obtener los datos de clientes desde localStorage
    const clients = JSON.parse(localStorage.getItem('clientes')) || [];
    
    // Mostrar todos los clientes al cargar la página
    renderClients(clients);
    
    // Filtrar clientes por DNI
    searchDniInput.addEventListener("input", function () {
        const searchValue = searchDniInput.value.trim();
        const filteredClients = clients.filter(client => client.dni.includes(searchValue));
        renderClients(filteredClients);
    });
});