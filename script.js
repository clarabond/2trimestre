cost caixaPrincipal=document.querySelector(".caixa-principal")
cost caixaPerguntas=document.querySelector(".caixa-perguntas")
cost caixaAlternativas=document.querySelector(".caixa-alternativas")
cost caixaResultado=document.querySelector(".caixa-resultado")
cost textoResultado=document.querySelector(".texto-resultado")

cost perguntas=[
    {
        enunciado:"Você costuma fumar",
        alternativas:[
          "Sim"
          "Não"
    ]
    },     
      {
       enunciado:"Pergunta 3",
        alternativas:[
         "Alternativa 1"
         "Alternativa 2"
  ]
  },                       
  ];
 {
     enunciado:"Você gosta de estudar?",
    alternativas:[
       "Não"
       "Sim"
  ]
  },     
  {
     enunciado:"Você é mais de exatas ou humanas?",
    alternativas:[
       "Exatas"
       "Humanas"
  ]
  }, 
  {
     enunciado:"O que você prefere?",
    alternativas:[
       "Doces"
       "Salgadas"
  ]
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
