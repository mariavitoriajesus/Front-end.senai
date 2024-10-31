Algoritmo "reisao.28-10"

Var
time1, time2 : caractere
gols1, gols2 : inteiro

Inicio
escreval("-----------CAMPEONATO------------")
escreval("Nome do primeiro time: ")
leia(time1)
escreval("Gols do time 1: ")
leia(gols1)

limpaTela

escreval("Nome do segundo time: ")
leia(time2)
escreval("Gols do time 2: ")
leia(gols2)

se(gols1 > gols2) entao
         escreval("O time vencendor é ", time1)
senao(gols2 < gols1) entao
         escreval("O time vencendor é ", time1)
senao
     ("EMPATE!!")

Fimse

Fimalgoritmo