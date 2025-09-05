function CalcularJuros(principal, taxa, tempo) {
    return principal * Math.pow(1+ taxa, tempo);

}

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


document.getElementById("btnJuros").addEventListener("click", () => {
  const p = parseFloat(document.getElementById("p").value);
  const i = parseFloat(document.getElementById("i").value);
  const n = parseInt(document.getElementById("n").value);
  const resultado = CalcularJuros(p, i, n);
  document.getElementById("outJuros").textContent = `Resultado: ${resultado.toFixed(2)}`;
});

document.getElementById("btnValidar").addEventListener("click", () => {
  const endereco = document.getElementById("addr").value;
  const valido = validarCarteira(endereco);
  document.getElementById("outAddr").textContent = valido ? "Carteira válida ✅" : "Carteira inválida ❌";
});

document.getElementById("btnSenha").addEventListener("click", () => {
  const senha = document.getElementById("pwd").value;
  const avaliacao = verificarSenha(senha);
  document.getElementById("outPwd").textContent = avaliacao;
});