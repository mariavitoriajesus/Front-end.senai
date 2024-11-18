document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nota = parseFloat(document.getElementById('nota').value);
    const resultado = document.getElementById('resultado');
    
    if (nota >= 7) {
        resultado.textContent = 'Aprovado!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Reprovado!';
        resultado.style.color = 'red';
    }
});
