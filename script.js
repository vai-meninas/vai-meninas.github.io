// Aguarda o carregamento completo do DOM (HTML)
document.addEventListener('DOMContentLoaded', () => {

    // 1. Cria os elementos do Modal dinamicamente
    // Isso evita ter que sujar o HTML principal com código extra
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'modal';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;'; // Símbolo de X

    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.id = 'img01';

    // Monta o modal
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // 2. Seleciona todas as imagens que devem expandir
    // Pegamos as imagens da classe .card e a foto de perfil
    const images = document.querySelectorAll('.card img, .foto img');

    // 3. Adiciona o evento de clique em cada imagem
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Pega o caminho da imagem clicada
        });
    });

    // 4. Função para fechar o modal ao clicar no X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // 5. Função para fechar se clicar fora da imagem (no fundo preto)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});