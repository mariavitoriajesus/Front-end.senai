Algoritmo "lerInversao"
// Autor(a)    : Maia Vitória Jesus do Nascimento
// Data atual  : 31/10/2024
Var
numeros: vetor[1..10] de inteiro
i: inteiro

Inicio
// Leitura dos 10 números
para i de 1 ate 10 faca
   escreva("Digite o ", i, "º número: ")
   leia(numeros[i])
fimPara

// Impressão dos números na ordem inversa
para i de 10 ate 1 passo -1 faca
   escreval(numeros[i])
fimPara

Fimalgoritmo