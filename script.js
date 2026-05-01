const cestas = [
    {
        id: 1,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$270,00",
        imagem: "assets/img/01kit-270.jpeg"
    },
    {
        id: 2,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$300,00",
        imagem: "assets/img/02kit-300.jpeg"
    },
    {
        id: 3,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$280,00",
        imagem: "assets/img/03kit-280.jpeg"
    }
];

const containerGaleria = document.getElementById('galeria-cestas');
const numeroWhatsApp = "5511999999999"; 

function carregarCestas() {
    const htmlCestas = cestas.map((cesta, index) => {
        const numeroCesta = index + 1; 
        
        const textoMensagem = encodeURIComponent(`Olá! Gostaria de encomendar a Cesta #${numeroCesta} - ${cesta.nome}.`);
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

        return `
            <article class="card-cesta">
                <div class="img-container">
                    <span class="badge-numero">#${numeroCesta}</span>
                    <img src="${cesta.imagem}" alt="${cesta.nome}">
                </div>
                <div class="card-info">
                    <h2>${cesta.nome}</h2>
                    <!-- Adicionada a classe 'preco' para estilização premium -->
                    <p class="preco">${cesta.descricao}</p> 
                    
                    <a href="${linkWhatsApp}" class="btn-card-whatsapp" target="_blank">
                        Encomendar
                    </a>
                </div>
            </article>
        `;
    }).join('');

    containerGaleria.innerHTML = htmlCestas;
}

carregarCestas();