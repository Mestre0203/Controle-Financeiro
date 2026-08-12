document.addEventListener("DOMContentLoaded", () => {


    if(sessionStorage.getItem("logado") !== "true") {

        window.location.href = "index.html";

    }


});

function sair(){


    sessionStorage.removeItem("logado");
    sessionStorage.removeItem("usuarioAtual");


    window.location.href="index.html";


}
