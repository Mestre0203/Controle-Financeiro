document.addEventListener("DOMContentLoaded", () => {


    if(sessionStorage.getItem("logado") !== "true") {

        window.location.href = "index.html";

    }


    carregar();

});

function carregar(){

    const lista=document.getElementById("lista");

    let lancamentos=JSON.parse(localStorage.getItem("lancamentos")) || [];

    lista.innerHTML="";

    let entradas=0;
    let saidas=0;

    lancamentos.forEach((item)=>{

        if(item.tipo==="Entrada"){

            entradas+=item.valor;

        }else{

            saidas+=item.valor;

        }

        lista.innerHTML+=`

        <div class="col-md-4">

            <div class="card shadow">

                <div class="card-body">

                    <h5>${item.tipo}</h5>

                    <p>${item.descricao}</p>

                    <p>${item.categoria}</p>

                    <p>R$ ${item.valor.toFixed(2)}</p>

                    <p>${item.data}</p>

                    <button
                    class="btn btn-danger"
                    onclick="excluir(${item.id})">

                    Excluir

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    document.getElementById("totalEntradas").innerHTML=
        entradas.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

    document.getElementById("totalSaidas").innerHTML=
        saidas.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

    document.getElementById("saldoFinal").innerHTML=
        (entradas-saidas).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

}

function excluir(id){

    let lancamentos=JSON.parse(localStorage.getItem("lancamentos")) || [];

    lancamentos=lancamentos.filter(item=>item.id!==id);

    localStorage.setItem("lancamentos",JSON.stringify(lancamentos));

    carregar();

}
