document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const numClientes = document.getElementById('numClientes').value;
    const totalConta = document.getElementById('totalConta').value;

    if (numClientes > 0) {
        const valorPorCliente = (totalConta / numClientes).toFixed(2);
        document.getElementById('resultado').textContent = `Cada cliente deve pagar: R$ ${valorPorCliente}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira um número válido de clientes.';
    }
});
