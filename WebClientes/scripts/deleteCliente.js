const formElemento = document.getElementById("deleteCliente");

formElemento.addEventListener("submit", (event) => {
    event.preventDefault();
    let clienteId = document.getElementById("clienteId").value;

    fetch(`http://localhost:8080/inicio/clientes/${clienteId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            alert('Cliente eliminado con éxito');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al eliminar el cliente');
    });

       
});
        
        

