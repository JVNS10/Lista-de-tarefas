const botao = document.getElementById("confirma");
const input = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", function() {

  const tarefa = document.createElement("p");
  tarefa.textContent = input.value;

  lista.appendChild(tarefa);

  input.value = "";
});