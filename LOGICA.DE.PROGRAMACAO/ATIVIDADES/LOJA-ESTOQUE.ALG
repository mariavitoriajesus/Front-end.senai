Algoritmo "lojaEstoque"
// Autor(a)    : Maria Vit�ria Jesus do Nascimento
// Data atual  : 31/10/2024
Var
nomes: vetor[1..3] de caractere
valores: vetor[1..3] de real
total, media: real
i: inteiro

Inicio
// Inicializa��o
total := 0

// Entrada de dados
para i de 1 ate 3 faca
   escreva("Digite o nome da ", i, "� mercadoria: ")
   leia(nomes[i])
   escreva("Digite o valor da ", i, "� mercadoria: ")
   leia(valores[i])
   total := total + valores[i]
   escreval("")
fimPara

// C�lculo da m�dia
media := total / 3

// Sa�da de dados
escreval("")
escreval("Valor total em estoque: R$", total)
escreval("M�dia de valor das mercadorias: R$", media)

Fimalgoritmo