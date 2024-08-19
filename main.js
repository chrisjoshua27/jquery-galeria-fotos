$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        
        // Adiciona a imagem ao novo item
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        // Adiciona a sobreposição com o link para ver a imagem em tamanho real
        $(`<div class="overlay-imagem-link"> 
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novoItem);

        // Adiciona o novo item à lista
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);

        // Limpa o campo de entrada
        $('#endereco-imagem-nova').val('');
    });
});
