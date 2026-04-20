const container = document.getElementById("produtos");

// Dados iniciais mais completos (Simulando o que virá do Admin)
let produtos = JSON.parse(localStorage.getItem("produtos")) || [
  {
    nome: "Kit Teclado e Mouse Sem Fio Slim Bluetooth Wireless",
    desc: "Kit Teclado e Mouse Wireless Bluetooth Premium – Conectividade Sem Limites para PC, Android e muito mais",
    preco: "130",
    rating: "8.8/10",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_660167-MLA101082314466_122025-F.webp", // Substitua por URLs reais
    link: "#"
  },
  {
    nome: "Smartwatch Ultra",
    desc: "Bateria de longa duração",
    preco: "149",
    rating: "8.6/10",
    img: "https://via.placeholder.com/300x200",
    link: "#"
  }
];

produtos.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.img}" alt="${p.nome}">
    <div class="card-content">
      <h3>${p.nome}</h3>
      <p class="rating">Nota: ${p.rating}</p>
      <div class="price-tag">R$ ${p.preco}</div>
      <a href="${p.link}" target="_blank">
        <button>Ver no Mercado Livre ></button>
      </a>
    </div>
  `;

  container.appendChild(card);
});
