Algoritmo "Doces da Comeia"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Maria Vitória Jesus do Nascimento
// Data atual  : 24/10/2024
Var
// Seção de Declarações das variáveis 
opcao : caractere
valorTotal : real

Procedimento adcionadoAoCarrinho(vp : real)
             VAR
             nomep : caractere
            INICIO
     escreval("Digite o nome do produto: ")
     leia}(nomep)
     escreval("Item adicionado ao carrinho: ", nomep)
     valorTotal <- ValorTotal + vp
     escreval("Valor total do carrinho: ", valorTotal)
fimProcedimento

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
     adcionadoAoCarrinho(8)//TRUFA
caso"2"
      adcionadoAoCarrinho(10)//BOLO NO POTE
caso "3"
     adcionadoAoCarrinho(15)//COPO DA FELICIDADE
caso "4"
     adcionadoAoCarrinho(5)//BOMBOM
caso "5"
     adcionadoAoCarrinho(3)//DOCINHOS
caso "6"
     adcionadoAoCarrinho(25)//PUDIM
caso "7"
     escreval("Compra cancelada!!")
outrocaso
         escreval("OpCao invalida!!")
fimEscolha

Fimalgoritmo