function calcularValor(input, precoUnitario) {
    const quantidade = parseInt(input.value);
    const valorTotal = quantidade * precoUnitario;
    input.parentElement.nextElementSibling.querySelector('.valor').textContent = valorTotal.toFixed(2);
    atualizarTotal();
}

function atualizarTotal() {
    let total = 0;
    const valores = document.querySelectorAll('.valor');
    valores.forEach(valor => {
        total += parseFloat(valor.textContent);
    });
    document.getElementById('valorTotal').textContent = total.toFixed(2);
}

function finalizarCompra() {
    alert('Compra concluída com sucesso!');
    limparCarrinho();
}

function limparCarrinho() {
    // Seleciona todos os campos de quantidade e redefine para 0
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = 0;
        // Atualiza o valor na tabela para 0
        input.parentElement.nextElementSibling.querySelector('.valor').textContent = '0.00';
    });
    // Limpa o valor total
    document.getElementById('valorTotal').textContent = '0.00';
}

// Função para limpar todos os dados da página ao carregar
function limparDadosPagina() {
    // Limpar todos os campos de input de tipo number
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = 0; // Redefine o valor para 0
    });

    // Limpar todos os valores de produto na tabela
    const valores = document.querySelectorAll('.valor');
    valores.forEach(valor => {
        valor.textContent = "0.00"; // Redefine o valor para R$ 0,00
    });
}

window.addEventListener('load', limparDadosPagina);


document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os dados dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Exibe uma mensagem de confirmação para o usuário
        alert(`Obrigado, ${nome}! Sua mensagem sobre "${assunto}" foi enviada com sucesso. Entraremos em contato através do e-mail: ${email} ou telefone: ${telefone}.`);

        // Limpa o formulário após o envio
        formulario.reset();
    });
});
