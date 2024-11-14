function showResults() {
    const userNumber = parseInt(document.getElementById('userNumber').value);
    const antecessor = userNumber - 1;
    const sucessor = userNumber + 1;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Antecessor: ${antecessor} <br> Número: ${userNumber} <br> Sucessor: ${sucessor}`;
}
