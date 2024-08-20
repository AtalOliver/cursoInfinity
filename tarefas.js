const tarefas = [{'nome': 'estudar', 'concluido': true}];

function atualizar_lista(){
    let lista_tarefas_ul = document.querySelector('#lista_tarefas');
    lista_tarefas_ul.innerHTML = '';
    for (let i = 0; i < tarefas.length; i++){
        let li = document.createElement('li');
        let concluido = tarefas[i]['concluido'] ? 'concluido' : 'pendente'
        li.innerHTML += tarefas[i]['nome'] + ' - ' + concluido;
        li.className = tarefas[i]['concluido'] ? 'concluido' : '';
        li.addEventListener('click', function(){
            concluir_tarefa(tarefas[i]['nome']);
            atualizar_lista();
        })
        lista_tarefas_ul.appendChild(li);
    }
}
function add_tarefa(nome){
    for (let i = 0; i < tarefas.length; i++){
        if (tarefas[i]['nome'] == nome){
            return false;
        }
    }
    tarefas.push({'nome': nome, 'concluido': false});
    return true;
}
function concluir_tarefa(nome){
    for (let i =0; i < tarefas.length; i++){
        if (tarefas[i]['nome'] == nome){
            tarefas[i]['concluido'] = !tarefas[i]['concluido'];
            break;
        }
    }
}

document.getElementById('btn_adicionar_tarefa').addEventListener('click',() =>{
    let entrada = document.getElementById('tarefa').value;
    let resultado = add_tarefa(entrada);
    if (resultado){
        alert('Tarefa criada')
        atualizar_lista();
    }else{
        alert('Falha ao criar tarefa')
    }
})
