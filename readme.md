1. CalcularJurosComposto(principal, taxa, tempo)

Calcula o juros composto de um valor principal.

Parâmetros:

principal → Valor inicial (número)

taxa → Taxa de juros por período (em decimal, ex: 5% = 0.05)

tempo → Número de períodos (número)

Retorno: Valor final após aplicação do juros composto.

Exemplo:

console.log(CalcularJurosComposto(100, 0.05, 12)); // 179.585...

2. validarCarteira(endereco)

Valida se um endereço de carteira atende ao padrão esperado (26 a 35 caracteres alfanuméricos).

Parâmetros:

endereco → String representando o endereço da carteira

Retorno: true se válido, false caso contrário.

Exemplo:

const endereco = "1AbCdEfGh12345678901234567";
console.log(validarCarteira(endereco)); // true

3. ordernaTransacoes(transacoes)

Ordena uma lista de transações pelo valor em ordem decrescente.

Parâmetros:

transacoes → Array de objetos com { endereco, valor }

Retorno: Array ordenado.

Exemplo:

const lista = [
  {endereco:"1AbCdEfGh12345678901234567", valor: 250},
  {endereco:"3XyZ98765432109876543210987", valor: 500},
];

console.log(ordernaTransacoes(lista));
/*
[
  {endereco: "3XyZ98765432109876543210987", valor: 500},
  {endereco: "1AbCdEfGh12345678901234567", valor: 250}
]
*/

4. verificarSenha(senha)

Verifica a força de uma senha baseada nos seguintes critérios:

Mínimo de 8 caracteres

Contém pelo menos 1 letra maiúscula

Contém pelo menos 1 letra minúscula

Contém pelo menos 1 número

Contém pelo menos 1 caractere especial (!@#$%^&*(),.?":{}|<>)

Parâmetros:

senha → String da senha a ser verificada

Retorno: Mensagem indicando se a senha é forte ou fraca.

Exemplo:

console.log(verificarSenha("Abc123!@")); // Senha forte ✅
console.log(verificarSenha("abc123"));   // Senha fraca ❌