let saldo = Number(prompt.question("Qual eh o seu saldo?"));
while(saldo < 0) {
saldo=Number(
prompt.question("Saldo inválido! Por favor, informe novamente:")
);
}
console.log(saldo);




