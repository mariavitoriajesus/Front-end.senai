Algoritmo "Doces da Comeia"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Maria Vitória Jesus do Nascimento
// Data atual  : 24/10/2024
Var
// Seção de Declarações das variáveis 
opcao : caractere
valorTotal : real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("*********Catalogo**********")
escreval("1 - TRUFA                     R$ 4,00")
escreval("2 - BOLO NO POTE              R$ 8,00")
escreval("3 - COPO DA FELICIDADE        R$ 15,00")
escreval("4 - BOMBOM                    R$ 5,00")
escreval("5 - DOCINHOS                  R$ 3,00")
escreval("6 - PUDIM                     R$ 25,00")
escreval("7 - CANCELAR COMPRA")
escreval("8 - CARRINHO")

leia(opcao)

escolha(opcao)
caso "1"
     escreval("Item adicionado ao carrinho!")//trufa
     valorTotal <- ValorTotal + 8
     escreval("Valor total do carrinho: ", valorTotal
caso"2"
       escreval("Item adicionado ao carrinho!")//bolo no pote
     valorTotal <- ValorTotal + 10
     escreval("Valor total do carrinho: ", valorTotal
caso "3"
     escreval("Item adicionado ao carrinho!")//copo da felidade
     valorTotal <- ValorTotal + 15
     escreval("Valor total do carrinho: ", valorTotal
caso "4"
     escreval("Item adicionado ao carrinho!")//bombom
     valorTotal <- ValorTotal + 5
     escreval("Valor total do carrinho: ", valorTotal
caso "5"
     escreval("Item adicionado ao carrinho!")//docinhos
     valorTotal <- ValorTotal + 3
     escreval("Valor total do carrinho: ", valorTotal
caso "6"
     escreval("Item adicionado ao carrinho!")//Pudim
     valorTotal <- ValorTotal + 25
     escreval("Valor total do carrinho: ", valorTotal
caso "7"
     escreval("Compra cancelada!!")
outrocaso
         escreval("Op~çao invalida!!")


Fimalgoritmo