Algoritmo "lojaEstoque"
// Autor(a)    : Maria Vit�ria Jesus do Nascimento
// Data atual  : 31/10/2024
Var
nome: vetor[1..3] de caractere
valor: vetor[1..3] de real
total, media: real
i, n: inteiro

Inicio
// Inicializa��o
    total := 0
    n := 0
    i := 1

// Entrada de dados
enquanto (i <= 100) faca
   escreval("Digite o nome da mercadoria (ou 'sair' para finalizar): ")
   leia(nome[i])
   se (nome[i] = "sair") entao
      interrompa
   fimse
   escreval("Digite o valor da mercadoria: ")
      leia(valor[i])
      total := total + valor[i]
      n := n + 1
      i := i + 1
fimenquanto

// C�lculo da m�dia
se (n > 0) entao
   media := total / n
senao
   media := 0
fimse

// Sa�da de dados
escreval("Valor total em estoque: R$", total)
escreval("M�dia de valor das mercadorias: R$", media)

Fimalgoritmo