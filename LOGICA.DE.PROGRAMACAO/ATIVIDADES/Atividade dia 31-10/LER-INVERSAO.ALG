Algoritmo "lerInversao"
// Autor(a)    : Maia Vit�ria Jesus do Nascimento
// Data atual  : 31/10/2024
Var
numeros: vetor[1..10] de inteiro
i: inteiro

Inicio
// Leitura dos 10 n�meros
para i de 1 ate 10 faca
   escreva("Digite o ", i, "� n�mero: ")
   leia(numeros[i])
fimPara

// Impress�o dos n�meros na ordem inversa
para i de 10 ate 1 passo -1 faca
   escreval(numeros[i])
fimPara

Fimalgoritmo