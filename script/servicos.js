/**
 * Botão de Fechar da descrição do serviço 
 */

var btnClose = document.querySelector('#btnClose');
btnClose.addEventListener('click', function() {
        window.history.back();
    });