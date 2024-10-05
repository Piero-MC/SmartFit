document.addEventListener("DOMContentLoaded", function () {
    // Datos de clientes simulados (esto sería reemplazado por la base de datos)
    const clients = [
        { id: 1, name: "Juan Perez", dni: "12345678", email: "juan.perez@gmail.com", phone: "987654321",membresia:"Fit",meses:"12",fechaFin:"20-10-2024" },
        { id: 2, name: "María Gómez", dni: "87654321", email: "maria.gomez@gmail.com", phone: "987654322",membresia:"Black",meses:"10",fechaFin:"20-10-2024"   },
        { id: 3, name: "Carlos Fernandez", dni: "12348765", email: "carlos.fernandez@gmail.com", phone: "987654323",membresia:"Smart",meses:"5",fechaFin:"20-10-2024" },
        
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
                    <td>${client.dni}</td>
                    <td>${client.email}</td>
                    <td>${client.phone}</td>
                    <td>${client.membresia}</td>
                    <td>${client.meses}</td>
                    <td>${client.fechaFin}</td>
                    <td><button>renovar</button></td>
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

});