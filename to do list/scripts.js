var removemsg = document.getElementById('criartarefa')
divtagm = null
paragrafom = null
divmainm = null
c = 0

function newitem(){
    if (c <= 4){
    c = c + 1
    const divtag = document.createElement('div');
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', function() {
        removeDiv(divtag);
      });
    const Title = document.createElement('h2');
    const Paragrafo = document.createElement('p');
        if (c === 1){
            let n1 = ''
            let n1p = ''
            while (n1 === '' && n1p === ''){
                n1 = String(prompt('Digite o titulo:'))
                n1p = String(prompt('Digite a tarefa:'))
                if (n1 === '' && n1p === ''){
                    alert('Prencha algum dos campos')
                }else{
                    Title.textContent = n1
                    Paragrafo.textContent = n1p
                }
            }
            
        }else if (c === 2){
            let n2 = ''
            let n2p = ''
            while (n2 === '' && n2p === ''){
                n2 = String(prompt('Digite o Titulo para a sua tarefa:'))
                n2p = String(prompt('Digite a tarefa:'))
                if (n2 === '' && n2p === ''){
                    alert('Prencha algum dos campos')
                }else{
                    Title.textContent = n2
                    Paragrafo.textContent = n2p
                }
            }
        }else if (c === 3){
            let n3 = ''
            let n3p = ''
            while (n3 === '' && n3p === ''){
                n3 = String(prompt('Digite o Titulo para a sua tarefa:'))
                n3p = String(prompt('Digite a tarefa:'))
                if (n3 === '' && n3p === ''){
                    alert('Prencha algum dos campos')
                }else{
                    Title.textContent = n3
                    Paragrafo.textContent = n3p
                }
            }
        }else if (c === 4){
            let n4 = ''
            let n4p = ''
            while (n4 === '' && n4p === ''){
                n4 = String(prompt('Digite o Titulo para a sua tarefa:'))
                n4p = String(prompt('Digite a tarefa:'))
                if (n4 === '' && n4p === ''){
                    alert('Prencha algum dos campos')
                }else{
                    Title.textContent = n4
                    Paragrafo.textContent = n4p
                }
            }
        }else{
            let n5 = ''
            let n5p = ''
            while (n5 === '' && n5p === ''){
                n5 = String(prompt('Digite o Titulo para a sua tarefa:'))
                n5p = String(prompt('Digite a tarefa:'))
                if (n5 === '' && n5p === ''){
                alert('Prencha algum dos campos')
            }else{
                Title.textContent = n5
                Paragrafo.textContent = n5p
            }
            }
        }
    
    botaoRemover.id = 'botao' + c
    divtag.className = 'paragrafos'
    divtag.id = 'Div' + c
    divtag.appendChild(Title)
    divtag.appendChild(Paragrafo)
    const divmain = document.getElementById('container')
    divmain.appendChild(divtag)
    divtag.append(botaoRemover)
    
    alert(`item número ${c} criado`)
    divtagm = divtag
    paragrafom = paragrafo
    divmainm = divmain
    }else{
        alert('Quantidade de listas criadas atingidas')
    }
}

function removeDiv(div) {
    const divPai = div.parentNode;
    divPai.removeChild(div);
    c = c - 1
    alert(`item número ${c + 1} excluído`)
}