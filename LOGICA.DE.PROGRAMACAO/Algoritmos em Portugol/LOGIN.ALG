Algoritmo "login"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Autor(a)    : Maria Vit�ria Jesus do Nascimento
// Data atual  : 25/10/2024

Var
senha, senha1, email, email1 : caractere


Inicio
senha1 <- "123456"
email1 <- "emailteste@email.com"

escreval("Insira seu email: ")
leia(email)
escreval("Insira sua senha: ")
leia(senha)

se(senha = senha1) e (email = email1) entao
         escreval("Login efetuado com sucesso!!")
senao
     escreval("Usu�rio ou senha incorreta! Tente novamente!!")
fimSe


Fimalgoritmo