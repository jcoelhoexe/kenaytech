const senhaCorreta = "kenay123";

function login() {
  const senha = document.getElementById("senha").value;

  if (senha === senhaCorreta) {
    document.getElementById("painel").style.display = "block";
  } else {
    alert("Senha incorreta");
  }
}

function addProduto() {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  const novo = {
    nome: document.getElementById("nome").value,
    desc: document.getElementById("desc").value,
    link: document.getElementById("link").value
  };

  produtos.push(novo);

  localStorage.setItem("produtos", JSON.stringify(produtos));

  alert("Produto salvo!");
}
