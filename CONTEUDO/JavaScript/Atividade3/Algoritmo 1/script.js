function calculadoraTerminal() {
  while (true) {
    let input = prompt(
      "Digite a operação que deseja efetuar ou 'sair' para encerrar:"
    );
    if (input.toLowerCase() === "sair") break;
    try {
      let result = eval(input);
      alert(`Resultado: ${result}`);
    } catch (e) {
      alert("Erro na operação. Tente novamente.");
    }
  }
}
calculadoraTerminal();
