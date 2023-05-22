var removemsg = document.getElementById('criartarefa');
var c = 0;

window.onload = function(){
    /* 
    Carrega os itens armazenado no local storage, todas as vezes
    Todas as vezes em que a tela é carregada (X not ok)
    */
    if (localStorage.length >= 1 ){
        recuperarTarefas()
        console.log('Carreguei itens')
        console.log(localStorage.length, localStorage)
    }else{
        console.log('Não há nada aqui!')
    }
}

function criarTarefa(titulo, descricao){
    /*
    Cria as tarefas e as armazena no localstorage (OK)
    */
    const tarefa = {
        titulo: titulo,
        descricao: descricao
    };
    const tarefaJSON = JSON.stringify(tarefa);
    localStorage.setItem('tarefa' + c, tarefaJSON);
    console.log('OK')
}

function recuperarTarefas(){
    /*
      Aqui recarregaria as tarefas após armazenadas no localStorage (X not ok)
    */
    for (let i = 1; i <= c; i++) {
        const tarefaJSON = localStorage.getItem('tarefa' + i);
    if (tarefaJSON){
        const tarefa = JSON.parse(tarefaJSON);
        criarTarefa(tarefa.titulo, tarefa.descricao);
        }
    }
}

function newitem(){
  if (c <= 4) {
    c = c + 1;
    /*
     cria as divs e tags, nada de tão especial
    */
    let = divtag = document.createElement('div');
    const divtagcheckbox = document.createElement('div');
    const checkbox = document.createElement('input');
    const botaoRemover = document.createElement('button');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox' + c;
    checkbox.addEventListener('click', function() {
      done(divtag);
    });
    /*
      Aqui cria alguns events
    */
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', function() {
      removeDiv(divtag.parentNode);
    });
    const Title = document.createElement('h2');
    const Paragrafo = document.createElement('p');
    const Paragrafocheck = document.createElement('p');
    Paragrafocheck.textContent = 'concluido';
    /*
      Aqui verifica e pede informações para as tarefas
    */
    if (c === 1) {
      let n1 = '';
      let n1p = '';
      while (n1 === '' && n1p === '') {
        n1 = String(prompt('Digite o título:'));
        n1p = String(prompt('Digite a tarefa:'));
        if (n1 === '' && n1p === '') {
          alert('Preencha algum dos campos');
        } else {
          Title.textContent = n1;
          Paragrafo.textContent = n1p;
        }
      }
    } else if (c === 2) {
      let n2 = '';
      let n2p = '';
      while (n2 === '' && n2p === '') {
        n2 = String(prompt('Digite o Título para a sua tarefa:'));
        n2p = String(prompt('Digite a tarefa:'));
        if (n2 === '' && n2p === '') {
          alert('Preencha algum dos campos');
        } else {
          Title.textContent = n2;
          Paragrafo.textContent = n2p;
        }
      }
    } else if (c === 3) {
      let n3 = '';
      let n3p = '';
      while (n3 === '' && n3p === '') {
        n3 = String(prompt('Digite o Título para a sua tarefa:'));
        n3p = String(prompt('Digite a tarefa:'));
        if (n3 === '' && n3p === '') {
          alert('Preencha algum dos campos');
        } else {
          Title.textContent = n3;
          Paragrafo.textContent = n3p;
        }
      }
    } else if (c === 4) {
      let n4 = '';
      let n4p = '';
      while (n4 === '' && n4p === '') {
        n4 = String(prompt('Digite o Título para a sua tarefa:'));
        n4p = String(prompt('Digite a tarefa:'));
        if (n4 === '' && n4p === '') {
          alert('Preencha algum dos campos');
        } else {
          Title.textContent = n4;
          Paragrafo.textContent = n4p;
        }
      }
    } else {
      let n5 = '';
      let n5p = '';
      while (n5 === '' && n5p === '') {
        n5 = String(prompt('Digite o Título para a sua tarefa:'));
        n5p = String(prompt('Digite a tarefa:'));
        if (n5 === '' && n5p === '') {
          alert('Preencha algum dos campos');
        } else {
          Title.textContent = n5;
          Paragrafo.textContent = n5p;
        }
      }
    }
    /*
      Adiciona os elementos a cada div paragrafo e etc, nada de
      importante também
    */

    botaoRemover.id = 'botao' + c;
    divtag = document.createElement('div'); // Correção: inicializar a variável divtag
    divtag.className = 'paragrafos';
    divtagcheckbox.className = 'divcheckbox';
    divtag.id = 'Div' + c;
    divtag.appendChild(Title);
    divtag.appendChild(Paragrafo);
    divtag.appendChild(divtagcheckbox);
    const divmain = document.getElementById('container');
    divmain.appendChild(divtag);
    divtag.append(botaoRemover);
    divtagcheckbox.appendChild(checkbox);
    divtagcheckbox.appendChild(Paragrafocheck);
    criarTarefa(Title.textContent, Paragrafo.textContent);
  }else{
    alert('Quantidade de listas criadas atingidas');
  }
}

function removeDiv(div) {
  /*
    Evento do Botão "remover" para exluir divs
  */
  const divPai = div.parentNode;
  divPai.removeChild(div);
  c = c - 1;
  localStorage.removeItem('tarefa' + c);
  alert(`Item número ${c + 1} excluído`);
}

function done(div) {
  /*
    Aqui verifica se a check box está ativada, e se sim
    altera os estados dos paragrafos, os deixando como
    "Riscados, nada demais"
  */
  const checkbox = document.getElementById('checkbox' + c);
  let h2 = div.querySelector('h2');
  let p = div.querySelector('p');
  if (checkbox.checked) {
    h2.style.textDecoration = 'line-through';
    p.style.textDecoration = 'line-through';
  } else {
    h2.style.textDecoration = 'none';
    p.style.textDecoration = 'none';
  }
  const indice = parseInt(div.id.slice(3));
  const tarefaJSON = localStorage.getItem('tarefa' + indice);
  if (tarefaJSON) {
    const tarefa = JSON.parse(tarefaJSON);
    tarefa.concluida = checkbox.checked;
    atualizarTarefaNoLocalStorage(tarefa);
  }
}



  