Algoritmo "usuario-repeticao"

Var
usuarioC, senhaC, usuario, senha, login : caractere

Procedimento login()
             VAR
             INICIO
usuarioC <- "adm"
senhaC <- "12456"
//enquanto() while
enquanto (login = "") faca
   escreval("Digite seu usuario: ")
      leia(usuario)
   escreval("Digite a sua senha: ")
      leia(senha)
limpaTela()
   //controller ou controlador
   se(senha = senhaC) e (usuario = usuarioC) entao
   //break - interrupcao
   login <- "correto"
fimSe
fimEnquanto
limpaTela()
   escreval("Login Efetuado com sucesso!!")

fimProcedimento

Inicio




Fimalgoritmo