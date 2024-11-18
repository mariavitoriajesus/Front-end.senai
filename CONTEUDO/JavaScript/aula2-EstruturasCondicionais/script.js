//aula sobre estruturas condicionais 
// como SE, ou SE NÃO, e SENAO

function explicacao1(){
 // alert("Primeira ezplicação dada!!")
    escolha = confirm("Deseja aprender sobre condicionais?")

    if (escolha) {
        alert("Aqui foi feito um SE NÃO ")
    } else {
        console.log("Se não")
    }
}

function explicacao2(){
    // alert("Segunda explicaçao dada!!")
    escolha = prompt("Segunda explicação sobre condicionais no JS. Selecione A, B, C ou D para descobrir mais!!")
    switch (escolha) {
        case 'A': 
            alert("Uma condicional no mundo da programação é uma estrutura que permite que o código execute diferentes ações com base em condições específicas.")
        break
        case 'B':
            alert("As condicionais avaliam uma expressão e, dependendo do resultado (verdadeiro ou falso), direcionam o fluxo de execução do programa para diferentes blocos de código.")
        break
        case 'C':
            alert("Os tipos mais comuns de condicionais são if, else if e else")
        break
        case 'D': 
            alert("Elas são fundamentais para criar lógica e controle de fluxo em um programa, permitindo a implementação de decisões e interações complexas.")
        break;
    
        // default:
        //     break;
    }
}

function explicacao3(){
    // alert("Terceira explicação dada!!")
    idade = Number(prompt("Digite um número para que a mágica aconteça: "))
    if (idade => 18) {
      alert("Número valido")  
      document.querySelector('body').innerHTML = "Deu certo!!"
    } else {
        alert("Número invalido")
        window.location = 'https://www.youtube.com/'
    }
}