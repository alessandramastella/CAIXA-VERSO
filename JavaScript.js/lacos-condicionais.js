let notaDoaluno = Number(prompt.question("Informe a nota do aluno: "));
let somaDasNotas = 0;
let qtdNotasValidas = 0;

while(notaDoaluno >=0){
    somaDasNotas += notaDoaluno;
}
qtdNotasValidas++;
notaDoaluno = Number(prompt.question("Informe a próxima nota: ")
)

console.log(somaDasNotas);
console.log(qtdNotasValidas);
console.log("Média das notas dos alunos =" ,somaDasNotas / qtdNotasValidas);









