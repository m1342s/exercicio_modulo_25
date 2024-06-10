const alunos = [
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 4 },
  { nome: "Pedro", nota: 7 },
  { nome: "Ana", nota: 8 },
  { nome: "Daniela", nota: 3 },
];
const alunosAprovados=alunos.filter(function(aluno) {
    return aluno.nota>=6
})
