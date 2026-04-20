const container = document.getElementById("produtos");

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

if (produtos.length === 0) {
  produtos = [
    {
      nome: "Película Câmera iPhone",
      desc: "Proteção 9H sem perder qualidade",
      link: "#"
    },
    {
      nome: "Smartwatch Custo-Benefício",
      desc: "Até 7 dias de bateria",
      link: "#"
    }
  ];
}

produtos.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">
      <button>Ver Oferta</button>
    </a>
  `;

  container.appendChild(card);
});
