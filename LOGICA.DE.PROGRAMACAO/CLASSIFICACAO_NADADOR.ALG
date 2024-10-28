Algoritmo "classificacao_nadador"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Maria Vitória Jesus do Nascimento
// Data atual  : 28/10/2024
Var
idade: inteiro

procedimento classificaNadador(idade: inteiro)
             inicio
se (idade >= 5) e (idade <= 7) entao
   escreval("Categoria: Infantil A")
senao se (idade >= 8) e (idade <= 11) entao
      escreval("Categoria: Infantil B")
senao se (idade >= 12) e (idade <= 13) entao
      escreval("Categoria: Juvenil A")
senao se (idade >= 14) e (idade <= 17) entao
      escreval("Categoria: Juvenil B")entao
senao se (idade >= 18) entao
      escreval("Categoria: Adultos")
senao
     escreval("Idade fora das categorias disponíveis")
     fimse
fimprocedimento

Inicio
escreva("Digite a idade do nadador: ")
leia(idade)
classificaNadador(idade)


Fimalgoritmo