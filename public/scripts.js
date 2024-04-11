document.addEventListener('DOMContentLoaded', function() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    darkModeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});


// Função para salvar as informações escolhidas
function salvarInformacoes() {
    // Captura os valores selecionados
    const dia = document.getElementById('diaSelecionado').innerText;
    const horario = document.getElementById('horarioSelecionado').innerText;
    const nome = document.getElementById('nomeSelecionado').innerText;
    const formaPagamento = document.getElementById('formaPagamentoSelecionada').innerText;

    // Cria um objeto com as informações
    const informacoes = {
        dia: dia,
        horario: horario,
        nome: nome,
        formaPagamento: formaPagamento
    };

    // Converte o objeto em uma string JSON
    const informacoesJSON = JSON.stringify(informacoes);

    // Salva as informações como um cookie com validade de 1 dia
    document.cookie = `informacoes=${informacoesJSON}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
}





