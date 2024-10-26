document.addEventListener("DOMContentLoaded", function () {
    // Datos de clientes simulados (esto sería reemplazado por la base de datos)


    const clientTableBody = document.getElementById("clientTableBody");
    const searchDniInput = document.getElementById("searchDni");

    // Función para mostrar los clientes en la tabla
    function renderClients(clientList) {
        clientTableBody.innerHTML = "";
        clientList.forEach(client => {
            const row = `
                <tr>
                    <td>${client.id}</td>
                    <td>${client.nombre}</td>
                    <td>${client.dni}</td>
                    <td>${client.correo}</td>
                    <td>${client.numTelf}</td>
                    <td>${client.membresia}</td>
                    <td>${client.meses}</td>
                    <td>${client.fechaFin}</td>
                    <td><a href="renovacion.html" class="btn-renew" data-id="1">renovar</a></td>
                </tr>
            `;
            clientTableBody.innerHTML += row;
        });
    }

    // Hacer una solicitud para obtener los datos de clientes desde el archivo JSON
    fetch('clientes.json')
        .then(response => response.json())
        .then(clients => {
            // Mostrar todos los clientes al cargar la página
            renderClients(clients);

            // Filtrar clientes por DNI
            searchDniInput.addEventListener("input", function () {
                const searchValue = searchDniInput.value.trim();
                const filteredClients = clients.filter(client => client.dni.includes(searchValue));
                renderClients(filteredClients);
            });
        })
        .catch(error => console.error('Error al cargar los clientes:', error));

    // Filtrar clientes por DNI
    searchDniInput.addEventListener("input", function () {
        const searchValue = searchDniInput.value.trim();
        const filteredClients = clients.filter(client => client.dni.includes(searchValue));
        renderClients(filteredClients);
    });

});