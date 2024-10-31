Algoritmo "lojaEstoque"
// Autor(a)    : Maria Vitória Jesus do Nascimento
// Data atual  : 31/10/2024
Var
nomes: vetor[1..3] de caractere
valores: vetor[1..3] de real
total, media: real
i: inteiro

Inicio
// Inicialização
total := 0

// Entrada de dados
para i de 1 ate 3 faca
   escreva("Digite o nome da ", i, "ª mercadoria: ")
   leia(nomes[i])
   escreva("Digite o valor da ", i, "ª mercadoria: ")
   leia(valores[i])
   total := total + valores[i]
   escreval("")
fimPara

// Cálculo da média
media := total / 3

// Saída de dados
escreval("")
escreval("Valor total em estoque: R$", total)
escreval("Média de valor das mercadorias: R$", media)

Fimalgoritmo