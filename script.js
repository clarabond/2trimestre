cost caixaPrincipal=document.querySelector(".caixa-principal")
cost caixaPerguntas=document.querySelector(".caixa-perguntas")
cost caixaAlternativas=document.querySelector(".caixa-alternativas")
cost caixaResultado=document.querySelector(".caixa-resultado")
cost textoResultado=document.querySelector(".texto-resultado")

cost perguntas=[
    {
        enunciado:"Você costuma fumar",
        alternativas:[
            {
                texto:"Sim"
                    afirmação:"afirmação",
    }
    {
        texto:"Não"
            afirmação:"afirmação"
}
]   
    },     
      {
       enunciado:"Você se exercita?",
        alternativas:[
           {
                texto:"Sim"
                    afirmação:"afirmação",
    }
    {
        texto:"Não"
            afirmação:"afirmação"
 {
     enunciado:"Você gosta de estudar?",
    alternativas:[
 {
                texto:"Sim"
                    afirmação:"afirmação",
    }
    {
        texto:"Não"
            afirmação:"afirmação"
}    
  {
     enunciado:"Você é mais de exatas ou humanas?",
    alternativas:[
 {
                texto:"Exatas"
                    afirmação:"afirmação",
    }
    {
        texto:"Humanas"
            afirmação:"afirmação"
}
  {
     enunciado:"O que você prefere?",
    alternativas:[
      {
                texto:"Doce"
                    afirmação:"afirmação",
    {
        texto:"Salgado"
            afirmação:"afirmação"
}
  },  

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
