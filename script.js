// Array simulando um banco de dados
const cestas = [
    {
        id: 1,
        nome: "Cesta dia das mães",
        descricao: "Preço R$270,00",
        imagem: "assets/img/01kit-270.jpeg"
    },
    {
        id: 2,
        nome: "Cesta dia das mães",
        descricao: "Preço R$300,00",
        imagem: "assets/img/02kit-300.jpeg"
    },
    {
        id: 3,
        nome: "Cesta dia das mães",
        descricao: "Preço R$280,00",
        imagem: "assets/img/03kit-280.jpeg"
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