document.addEventListener("DOMContentLoaded", () => {


    if(sessionStorage.getItem("logado") !== "true") {

        window.location.href = "index.html";

    }


});

function salvarLancamento(){

    const tipo=document.getElementById("tipo").value;
    const categoria=document.getElementById("categoria").value;
    const descricao=document.getElementById("descricao").value.trim();
    const valor=parseFloat(document.getElementById("valor").value);
    const data=document.getElementById("data").value;

    const mensagem=document.getElementById("mensagem");

    mensagem.innerHTML="";

    if(tipo==="" || descricao==="" || isNaN(valor) || !data){

        mensagem.innerHTML="Preencha todos os campos.";

        return;

    }

    let lancamentos=JSON.parse(localStorage.getItem("lancamentos"));

    if(!Array.isArray(lancamentos)){

        lancamentos=[];

    }

    lancamentos.push({

        id:Date.now(),

        tipo,

        categoria,

        descricao,

        valor,

        data

    });

    localStorage.setItem("lancamentos",JSON.stringify(lancamentos));

    mensagem.innerHTML="Lançamento salvo com sucesso!";

    document.querySelector("form").reset();

}
