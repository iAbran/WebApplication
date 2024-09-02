function getClientes(done) {
    fetch("https://moteteappa.onrender.com/inicio/clientes")
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getClientes(data => {
    data.forEach(client => {
        const tbody = document.querySelector("tbody")
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.edad}</td>
            <td>${client.fechaNacimiento}</td>
            <td>${client.telefono}</td>
            <td>${client.email}</td>
            <td>${client.direccion}</td>
        `;

        tbody.appendChild(row);  // Usar appendChild para agregar el fragmento
    });
});