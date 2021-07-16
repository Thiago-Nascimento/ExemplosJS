function Logar() {    
    var emailCorreto = "thiago@email.com";
    var senhaCorreta = "batata123";
    
    var email = document.getElementById("email-usuario").value
    var senha = document.getElementById("senha-usuario").value

    var campoMensagem = document.getElementById("mensagem")

    if (email == emailCorreto && senha == senhaCorreta) {
        alert("Logado com sucesso!!!")
    } else {
        campoMensagem.innerText = "Usuario ou Senha incorretos"
    }
}