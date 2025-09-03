function CalcularJurosComposto(principal, taxa, tempo) {
    return principal * Math.pow(1+ taxa, tempo);

}

console.log(CalcularJurosComposto(100, 0.05,12));

function validarCarteira(endereco) {
    const regex = /[a-zA-Z0-9]{26,35}$/;
    return regex.test(endereco);
}

function ordernaTransacoes (transacoes) {
    return transacoes.sort((a,b) => b.valor - a.valor);
}

const lista = [
    {endereco:"1AbCdEfGh12345678901234567", valor: 250},
    {endereco: "3XyZ98765432109876543210987", valor: 500},
];

console.log(validarCarteira(lista[0].endereco));

console.log(ordernaTransacoes(lista));

function verificarSenha(senha) {
  const minLength = senha.length >= 8;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

  if (minLength && temMaiuscula && temMinuscula && temNumero && temEspecial) {
    return "Senha forte ✅";
  } else {
    return "Senha fraca ❌";
  }
}

// Exemplo:
console.log(verificarSenha("Abc123!@")); // Senha forte ✅
console.log(verificarSenha("abc123"));   // Senha fraca ❌
