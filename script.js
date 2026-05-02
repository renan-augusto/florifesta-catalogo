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
    },
    {
        id: 4,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$270,00",
        imagem: "assets/img/04kit-270.jpeg"
    },
    {
        id: 5,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$275,00",
        imagem: "assets/img/05kit-275.jpeg"
    },
    {
        id: 6,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$270,00",
        imagem: "assets/img/06kit-270.jpeg"
    },
    {
        id: 7,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$285,00",
        imagem: "assets/img/07kit-285.jpeg"
    },
    {
        id: 8,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$285,00",
        imagem: "assets/img/08kit-285.jpeg"
    },
    {
        id: 9,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$260,00",
        imagem: "assets/img/09kit-260.jpeg"
    },
    {
        id: 10,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$265,00",
        imagem: "assets/img/10kit-265.jpeg"
    },
    {
        id: 11,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$265,00",
        imagem: "assets/img/11kit-265.jpeg"
    },
    {
        id: 12,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$285,00",
        imagem: "assets/img/12kit-285.jpeg"
    },
    {
        id: 13,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$250,00",
        imagem: "assets/img/13kit-250.jpeg"
    },
    {
        id: 14,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$275,00",
        imagem: "assets/img/14kit-275.jpeg"
    },
    {
        id: 15,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$280,00",
        imagem: "assets/img/15kit-280.jpeg"
    },
    {
        id: 16,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$275,00",
        imagem: "assets/img/16kit-275.jpeg"
    },
    {
        id: 17,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$295,00",
        imagem: "assets/img/17kit-295.jpeg"
    },
    {
        id: 18,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$300,00",
        imagem: "assets/img/18kit-300.jpeg"
    },
    {
        id: 19,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$265,00",
        imagem: "assets/img/19kit-265.jpeg"
    },
    {
        id: 20,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$220,00",
        imagem: "assets/img/20kit-220.jpeg"
    },
    {
        id: 21,
        nome: "Cesta Dia das Mães",
        descricao: "Preço R$220,00",
        imagem: "assets/img/21kit-220.jpeg"
    }
];

const containerGaleria = document.getElementById('galeria-cestas');
const numeroWhatsApp = "5516997679116"; 

function carregarCestas() {
    const htmlCestas = cestas.map((cesta, index) => {
        const numeroCesta = index + 1; 
        
        const textoMensagem = encodeURIComponent(`Olá! Gostaria de encomendar a Cesta #${numeroCesta} - ${cesta.nome}.`);
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

        return `
            <article class="card-cesta">
                <div class="img-container">
                    <span class="badge-numero">#${numeroCesta}</span>
                    <img src="${cesta.imagem}" alt="${cesta.nome}" onclick="abrirZoom('${cesta.imagem}')">
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


function abrirZoom(caminhoImagem) {
    const lightbox = document.getElementById('lightbox');
    const imgZoom = document.getElementById('img-zoom');
    
    // Passa o caminho da imagem clicada para a imagem grandona do lightbox
    imgZoom.src = caminhoImagem;
    // Muda o display de 'none' para 'flex' (para aparecer e centralizar)
    lightbox.style.display = 'flex';
}

function fecharZoom() {
    const lightbox = document.getElementById('lightbox');
    const imgZoom = document.getElementById('img-zoom');
    
    // Esconde o lightbox
    lightbox.style.display = 'none';
    // Limpa a imagem da memória
    imgZoom.src = "";
}

carregarCestas();