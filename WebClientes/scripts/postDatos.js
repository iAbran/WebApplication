
const formElemento = document.getElementById("saveClientes");

formElemento.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let telefono = document.getElementById("telefono").value;
    let telefonoNumero = parseInt(telefono, 10);


    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let transaction = {
        name : name, 
        fechaNacimiento : fechaNacimiento, 
        telefono : telefonoNumero,
        email : email, 
        direccion : direccion};
    let transactionJson = JSON.stringify(transaction);
   /*  console.log(transactionJson); */

    fetch("http://localhost:8080/inicio/clientes/api", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: transactionJson
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
        alert('Cliente guardado con éxito');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al guardar el cliente');
    });
       
});