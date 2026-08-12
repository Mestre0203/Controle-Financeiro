document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("btnCadastrar");

    botao.addEventListener("click", cadastrarUsuario);


    const voltar = document.getElementById("btnVoltar");

    voltar.addEventListener("click", () => {

        window.location.href = "index.html";

    });

});


function cadastrarUsuario() {


    const usuario = document.getElementById("usuario").value.trim();

    const senha = document.getElementById("senha").value.trim();

    const mensagem = document.getElementById("mensagem");


    mensagem.innerHTML = "";


    if(usuario === "" || senha === "") {

        mensagem.innerHTML = "Preencha todos os campos!";
        return;

    }



    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];



    let existe = usuarios.find(
        user => user.usuario === usuario
    );



    if(existe) {

        mensagem.innerHTML = "Usuário já existe!";
        return;

    }



    usuarios.push({

        usuario: usuario,
        senha: senha

    });



    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );



    mensagem.className = "text-success mb-3 fw-bold";

    mensagem.innerHTML = "Usuário criado com sucesso!";



    setTimeout(() => {

        window.location.href = "index.html";

    }, 1500);


}
