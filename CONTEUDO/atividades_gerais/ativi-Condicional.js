// Lê os nomes dos times e o número de gols marcados
const time1 = prompt("Digite o nome do primeiro time:");
const gols_time1 = parseInt(prompt(`Digite o número de gols marcados pelo ${time1}:`), 10);

const time2 = prompt("Digite o nome do segundo time:");
const gols_time2 = parseInt(prompt(`Digite o número de gols marcados pelo ${time2}:`), 10);

// Verifica quem é o vencedor ou se houve empate
if (gols_time1 > gols_time2) {
    console.log(`O vencedor é: ${time1}`);
} else if (gols_time2 > gols_time1) {
    console.log(`O vencedor é: ${time2}`);
} else {
    console.log("EMPATE");
}
