// Exemplo simples: alerta ao carregar a página
window.onload = function() {
    alert('Bem-vindo ao seu primeiro projeto!');
    // Adiciona evento ao botão
    var botao = document.getElementById('meuBotao');
    if (botao) {
        botao.onclick = function() {
            alert('Você clicou no botão!');
        };
    }
};