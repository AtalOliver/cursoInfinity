function incluir() {
    const tarefa = document.getElementById('txtt').value;
    const responsavel = document.getElementById('txtr').value;
    const descricao = document.getElementById('txtd').value;
    const prazo = document.getElementById('txtp').value;

    if (!tarefa || !responsavel || !descricao || !prazo) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
 let prioridade;
    if (document.getElementById('baixa').checked) {
        prioridade = 'Baixa';
    } else if (document.getElementById('media').checked) {
        prioridade = 'Média';
    } else if (document.getElementById('alta').checked) {
        prioridade = 'Alta';
    }
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Tarefa:</strong> ${tarefa} <br>
        <strong>Responsável:</strong> ${responsavel} <br>
        <strong>Descrição:</strong> ${descricao} <br>
        <strong>Prazo:</strong> ${prazo} <br>
        <strong>Prioridade:</strong> ${prioridade} <br>
        <button onclick="remover(this)">Remover</button>
        <hr>
    `;

    document.getElementById('textlist').appendChild(li);

    document.getElementById('txtt').value = '';
    document.getElementById('txtr').value = '';
    document.getElementById('txtd').value = '';
    document.getElementById('txtp').value = '';
    document.getElementById('baixa').checked = true; 
}

function remover(button) {
    const li = button.parentElement;
    li.remove();
}