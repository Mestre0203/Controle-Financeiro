document.addEventListener("DOMContentLoaded", () => {

    const botaoLogin = document.getElementById("btnLogin");
    const botaoCriar = document.getElementById("btnCriarUsuario");


    botaoLogin.addEventListener("click", fazerLogin);


    botaoCriar.addEventListener("click", () => {

        window.location.href = "usuario.html";

    });

});


function fazerLogin() {

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");


    mensagem.innerHTML = "";


    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    let encontrado = usuarios.find(
        user => 
        user.usuario === usuario &&
        user.senha === senha
    );


    if(encontrado) {


        sessionStorage.setItem("logado", "true");

        sessionStorage.setItem(
            "usuarioAtual",
            encontrado.usuario
        );


        window.location.href = "menu.html";


    } else {


        mensagem.innerHTML = "Login inválido";


    }

}