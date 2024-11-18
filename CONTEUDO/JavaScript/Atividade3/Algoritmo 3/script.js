document.getElementById('diaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    const diasDaSemana = {
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado',
        7: 'Domingo'
    };

    if (diasDaSemana[numero]) {
        resultado.textContent = `O dia correspondente é: ${diasDaSemana[numero]}`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Por favor, digite um número válido de 1 a 7.';
        resultado.style.color = 'red';
    }
});
