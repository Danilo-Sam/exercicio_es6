"use strict";

var alunos = [];
alunos.push({
  nome: ['João'],
  nota: ['5.5']
});
alunos.push({
  nome: ['Paulo'],
  nota: ['6.0']
});
alunos.push({
  nome: ['Maria'],
  nota: ['9.0']
});
alunos.push({
  nome: ['Pedro'],
  nota: ['5.0']
});
alunos.push({
  nome: ['Bruna'],
  nota: ['7.5']
});
alunos.push({
  nome: ['Victor'],
  nota: ['9.5']
});
alunos.push({
  nome: ['Vitoria'],
  nota: ['4.5']
});
console.log(alunos);
var notaMaiorQueSeis = alunos.filter(function (item) {
  return item.nota >= '6.0';
});
console.log(notaMaiorQueSeis);