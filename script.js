/* ======================================================
   SIMULADO - SCRIPT PRINCIPAL
====================================================== */

const conteudo = document.getElementById("conteudo");
const grade = document.getElementById("gradeQuestoes");

const numeroAtual = document.getElementById("numeroAtual");
const respondidas = document.getElementById("respondidas");
const embranco = document.getElementById("embranco");
const pesquisa = document.getElementById("pesquisa");
const tempo = document.getElementById("tempo");

let respostas = {};

/* ======================================================
   CRIAR QUESTÕES
====================================================== */

function criarQuestoes(){

    conteudo.innerHTML="";

    questoes.forEach((q)=>{

        let html=`

        <section
            class="questao"
            id="questao-${q.numero}">

            <div class="numeroQuestao">

                ${q.numero}

            </div>

            <p class="textoQuestao">

                ${q.texto}

            </p>

        `;

        if(q.imagem){

            html+=`

            <img
                class="imagemQuestao"
                src="${q.imagem}"
                alt="Imagem">

            `;

        }

        q.alternativas.forEach((alternativa,index)=>{

            const letra=String.fromCharCode(65+index);

            html+=`

            <div

                class="alternativa"

                data-questao="${q.numero}"

                data-alternativa="${index}">

                <div class="letra">

                    ${letra}

                </div>

                <div class="textoAlternativa">

                    ${alternativa}

                </div>

            </div>

            `;

        });

        html+=`

        </section>

        `;

        conteudo.innerHTML+=html;

    });

}

/* ======================================================
   PAINEL DIREITO
====================================================== */

function criarPainel(){

    grade.innerHTML="";

    questoes.slice(0,10).forEach((q)=>{

        grade.innerHTML+=`

        <button

            class="botaoQuestao"

            id="botao-${q.numero}"

            data-numero="${q.numero}">

            ${q.numero}

        </button>

        `;

    });

}

/* ======================================================
   INICIALIZAÇÃO
====================================================== */

criarQuestoes();

criarPainel();

respondidas.textContent=0;

embranco.textContent = 10;

numeroAtual.textContent = `1 de 10`;

/* ======================================================
   NAVEGAÇÃO PELO PAINEL
====================================================== */

grade.addEventListener("click", (e) => {

    const botao = e.target.closest(".botaoQuestao");

    if (!botao) return;

    const numero = botao.dataset.numero;

    document
        .getElementById(`questao-${numero}`)
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

});


/* ======================================================
   MARCAR E DESMARCAR ALTERNATIVAS
====================================================== */

conteudo.addEventListener("click", (e) => {

    const alternativa = e.target.closest(".alternativa");

    if (!alternativa) return;

    const numeroQuestao = alternativa.dataset.questao;

    const indice = alternativa.dataset.alternativa;

    const alternativas = document.querySelectorAll(

        `.alternativa[data-questao="${numeroQuestao}"]`

    );

    // clicou novamente na mesma alternativa
    if (respostas[numeroQuestao] == indice) {

        delete respostas[numeroQuestao];

        alternativa.classList.remove("marcada");

    }

    else {

        alternativas.forEach((a) => {

            a.classList.remove("marcada");

        });

        alternativa.classList.add("marcada");

        respostas[numeroQuestao] = indice;

    }

    atualizarPainel();

});


/* ======================================================
   ATUALIZAR PAINEL
====================================================== */

function atualizarPainel() {

    document.querySelectorAll(".botaoQuestao").forEach((botao)=>{

    const numero = Number(botao.dataset.numero);

    if(numero > 10) return;

    if(respostas[numero] !== undefined){

        botao.classList.add("respondida");

    }else{

        botao.classList.remove("respondida");

    }

});

    const totalRespondidas = Object.keys(respostas).length;

    respondidas.textContent = Math.min(totalRespondidas, 10);

    embranco.textContent = 10 - Math.min(totalRespondidas, 10);

    const bolinhaRespondidas =
document.getElementById("bolinhaRespondidas");

const bolinhaBranco =
document.getElementById("bolinhaBranco");

if(totalRespondidas > 0){
    bolinhaRespondidas.classList.add("ativa");
}else{
    bolinhaRespondidas.classList.remove("ativa");
}


if((10-totalRespondidas) > 0){
    bolinhaBranco.classList.add("ativa");
}else{
    bolinhaBranco.classList.remove("ativa");
}

}

/* ======================================================
   CRONÔMETRO
====================================================== */

let tempoRestante = 50 * 60; // 50 minutos

function atualizarCronometro() {

    const horas = Math.floor(tempoRestante / 3600);

    const minutos = Math.floor((tempoRestante % 3600) / 60);

    const segundos = tempoRestante % 60;

    tempo.textContent =

        `${String(horas).padStart(2,"0")} : ${String(minutos).padStart(2,"0")} : ${String(segundos).padStart(2,"0")}`;

    if (tempoRestante > 0) {

        tempoRestante--;

    } else {

        clearInterval(relogio);

        alert("Tempo encerrado!");

    }

}

atualizarCronometro();

const relogio = setInterval(atualizarCronometro,1000);


/*=====================================================
    PESQUISA DIRETA
=====================================================*/

pesquisa.addEventListener("keydown", function(e){

    if(e.key !== "Enter") return;

    const termo = pesquisa.value
    .trim()
    .toLowerCase()
    .replace(/["'.,;:!?()]/g, "");

    if(termo === "") return;

    let encontrada = null;

    for(const q of questoes){

    const textoQuestao = q.texto
        .toLowerCase()
        .replace(/["'.,;:!?()]/g, "");

    if(textoQuestao.includes(termo)){
        encontrada = q;
        break;
    }

    for(const alt of q.alternativas){

        if(alt.toLowerCase().replace(/["'.,;:!?()]/g, "").includes(termo)){
            encontrada = q;
            break;
        }

    }

    if(encontrada) break;

}

    if(encontrada){

        const elemento = document.getElementById("questao-" + encontrada.numero);

        elemento.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

        // Destaque temporário
        elemento.style.outline = "3px solid #1976D2";
        elemento.style.transition = "0.3s";

        setTimeout(() => {
            elemento.style.outline = "";
        }, 2000);

    }else{

        alert("Nenhuma questão encontrada.");

    }

    pesquisa.value = "";

});



/* ======================================================
   QUESTÃO ATUAL
====================================================== */

function atualizarQuestaoAtual(){

    const todas=document.querySelectorAll(".questao");

    let atual=1;

    todas.forEach((q)=>{

        const topo=q.getBoundingClientRect().top;

        if(topo<200){

            atual=q.id.replace("questao-","");

        }

    });

    numeroAtual.textContent = `${Math.min(Number(atual),10)} de 10`;

    document

    .querySelectorAll(".botaoQuestao")

    .forEach((b)=>{

        b.classList.remove("atual");

    });

    const botao=document.getElementById("botao-"+atual);

    if(botao){

        botao.classList.add("atual");

    }

}

conteudo.addEventListener("scroll",atualizarQuestaoAtual);

atualizarQuestaoAtual();

/* ======================================================
   SALVAR RESPOSTAS
====================================================== */

function salvarDados(){

    localStorage.setItem(

        "respostas",

        JSON.stringify(respostas)

    );

}

/* ======================================================
   RESTAURAR RESPOSTAS
====================================================== */

function restaurarDados(){

    const dados = localStorage.getItem("respostas");

    if(dados){

        respostas = JSON.parse(dados);

    }

    Object.keys(respostas).forEach((numeroQuestao)=>{

        const indice = respostas[numeroQuestao];

        const alternativa = document.querySelector(

            `.alternativa[data-questao="${numeroQuestao}"][data-alternativa="${indice}"]`

        );

        if(alternativa){

            alternativa.classList.add("marcada");

        }

    });

    atualizarPainel();

    atualizarCronometro();

}

restaurarDados();


/* ======================================================
   SALVAR AUTOMATICAMENTE
====================================================== */

setInterval(salvarDados,1000);


/* ======================================================
   BOTÃO FINALIZAR
====================================================== */

document
.getElementById("finalizar")
.addEventListener("click",()=>{

    const total = Object.keys(respostas).length;

    const confirmar = confirm(

`Deseja realmente finalizar a prova?

Questões respondidas: ${total}

Questões em branco: ${questoes.length-total}`

    );

    if(confirmar){

        alert("Prova finalizada!");

        localStorage.removeItem("respostas");


    }

});


/* ======================================================
   LIMPAR PESQUISA AO ESC
====================================================== */

pesquisa.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        pesquisa.value="";

    }

});


/* ======================================================
   INICIALIZAÇÃO
====================================================== */

atualizarPainel();

atualizarQuestaoAtual();
