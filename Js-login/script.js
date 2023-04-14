var newemail = ''
var newsenha = ''
function verify(){
    var emails = String(document.getElementById("email").value)
    var senhas = String(document.getElementById("senha").value)
    if (emails == '' && senhas == ''){
        alert('Informações erradas')
    }else{
        if(senhas.length === 0){
            alert('Falta a sua senha')
        }else{
            if(emails.length === 0){
                alert('Falta o seu email')
            }
        }
    }
    if (emails != localStorage.getItem('email') && senhas != localStorage.getItem('senha')){
        alert('Infomações erradas, você já possui cadastro?')
    }if (emails == localStorage.getItem('email') && senhas != localStorage.getItem('senha')){
        alert('Senha incorreta!')
    }if (emails != localStorage.getItem('email') && senhas == localStorage.getItem('senha')){
        alert('Email incorreto!')
    }else if (emails == localStorage.getItem('email') && senhas == localStorage.getItem('senha')){
        alert('Seja bem vindo!')
    }
}
function cadastrar(){
    var newemailL = String(document.getElementById("newemail").value)
    var newsenhaL = String(document.getElementById("newsenha").value)
    newemail = newemailL
    newsenha = newsenhaL
    localStorage.setItem('email', newemail)
    localStorage.setItem('senha', newsenha)
}
