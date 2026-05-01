// Array simulando um banco de dados
const cestas = [
    {
        id: 1,
        nome: "Cesta de Café da Manhã Premium",
        descricao: "Pães artesanais, frios, frutas da estação e suco natural.",
        imagem: "assets/img/cesta-cafe.jpg"
    },
    {
        id: 2,
        nome: "Cesta de Chocolates Finos",
        descricao: "Seleção de trufas, barras de chocolate e bombons recheados.",
        imagem: "assets/img/cesta-chocolate.jpg"
    },
    {
        id: 3,
        nome: "Cesta Romântica com Rosas",
        descricao: "Acompanha buquê de rosas vermelhas, pelúcia e espumante.",
        imagem: "assets/img/cesta-flores.jpg"
    }
    // Para adicionar mais produtos, é só colocar um novo bloco com vírgula aqui
];

// Captura o container no HTML
const containerGaleria = document.getElementById('galeria-cestas');

// Função para renderizar as cestas
function carregarCestas() {
    // Mapeia o array e cria um bloco de HTML para cada item
    const htmlCestas = cestas.map(cesta => {
        return `
            <article class="card-cesta">
                <img src="${cesta.imagem}" alt="${cesta.nome}">
                <div class="card-info">
                    <h2>${cesta.nome}</h2>
                    <p>${cesta.descricao}</p>
                </div>
            </article>
        `;
    }).join(''); // O join('') remove as vírgulas do array original

    // Injeta o HTML gerado dentro do container
    containerGaleria.innerHTML = htmlCestas;
}

// Executa a função ao carregar o script
carregarCestas();