var carta1 = {
    nome:"Din Djarin",
    imagem: "img/dinDjarin.jpg",  
    atributos: {
        Força: 9,
        Inteligência: 7,
        Poder: 7
    }
};
    
var carta2 = {
    nome:"Greef Karga",
    imagem: "img/greefKarga.jpg",   
    atributos: { 
        Força: 7,
        Inteligência: 5,
        Poder: 3
    }
};    
    
var carta3 = {
    nome:"Kuill",
    imagem: "img/kuill.jpg",  
    atributos: {
        Força: 3,
        Inteligência: 8,
        Poder: 3
    }
};

var carta4 = {
    nome:"IG-11",
    imagem: "img/ig_11.jpg",  
    atributos: {
        Força: 7,
        Inteligência: 7,
        Poder: 7
    }
};

var carta5 = {
    nome:"Cara Dune",
    imagem: "img/caraDune.jpg",  
    atributos: {
        Força: 7,
        Inteligência: 5,
        Poder: 5
    }
};

var carta6 = {
    nome:"Fennec Shand",
    imagem: "img/fennecShand.jpg",  
    atributos: {
        Força: 7,
        Inteligência: 8,
        Poder: 5
    }
};

var carta7 = {
    nome:"Peli Motto",
    imagem: "img/peliMotto.jpg",  
    atributos: {
        Força: 3,
        Inteligência: 7,
        Poder: 3
    }
};

var carta8 = {
    nome:"Moff Gideon",
    imagem: "img/moffGideon.jpg",  
    atributos: {
        Força: 8,
        Inteligência: 7,
        Poder: 8
    }
};

var carta9 = {
    nome:"Cobb Vanth",
    imagem: "img/cobbVanth.jpg",  
    atributos: {
        Força: 8,
        Inteligência: 6,
        Poder: 7
    }
};

var carta10 = {
    nome:"Grogu",
    imagem: "img/grogu.jpg",  
    atributos: {
        Força: 5,
        Inteligência: 5,
        Poder: 8
    }
};

var carta11 = {
    nome:"Armeira",
    imagem: "img/armeira.jpg",  
    atributos: {
        Força: 8,
        Inteligência: 9,
        Poder: 5
    }
};

var carta12 = {
    nome:"Boba Fett",
    imagem: "img/bobaFett.jpg",  
    atributos: {
        Força: 8,
        Inteligência: 7,
        Poder: 8
    }
};

var carta13 = {
    nome:"Bo-Katan",
    imagem: "img/bo_katan.jpg",  
    atributos: {
        Força: 7,
        Inteligência: 7,
        Poder: 5
    }
};

var carta14 = {
    nome:"Ahsoka Tano",
    imagem: "img/ahsoka_tano.jpg",  
    atributos: {
        Força: 7,
        Inteligência: 8,
        Poder: 9
    }
};

//array com todas as cartas
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14];
//inicialização das variáveis como vazias
var cartaMaquina = 0
var cartaJogador = 0
  
//função atribuida ao botão, que sorteia as carta para o jogador e a máquina
function sortearCarta() {
  
    //habilita a caixa de texto
        document.getElementById("resultado").hidden = false;

    //definição da cartaMáquina como aleatória entre as 14 opções 
        var numeroCartaMaquina = parseInt(Math.random() * 14);
        cartaMaquina = cartas[numeroCartaMaquina];
    
    //definição da cartaJogador como aleatória, com exclusão da possibilidade de ser igual a cartaMáquina usando o while
        var numeroCartaJogador = parseInt(Math.random() * 14);
        while (numeroCartaMaquina == numeroCartaJogador) {
            numeroCartaJogador = parseInt(Math.random() * 14);
        }
        cartaJogador = cartas[numeroCartaJogador]; 
    

    //desabilita o botão de sortear após seu uso e habilita o botão de jogar 
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;

    //exibe texto indicando o que o usuário escolha um dos atributos  
        document.getElementById("resultado").innerHTML = "Escolha seu atributo!!";

    //executa a função de exibir a carta sorteada do jogador (função criada no final do código)
        exibirCartaJogador();
  }
  
//função que obtém o atributo selecionado pelo jogador e prepara para jogar
function obtemAtributoSelecionado() {
    
    //armazena os atributos da carta escolhida
        var atributosRadio = document.getElementsByName("atributo");
    //for para os possíveis atributos
        for (var i = 0; i < atributosRadio.length; i++) {
            //condicional que verifica se o input tipo radio está selecionado e retorna o seu valor
            if (atributosRadio[i].checked == true) {
            return atributosRadio[i].value;
            }
        }
}
  
//função que executa a jogada após escolher os atributos
function jogar() {

    //variável que armazena o valor dos atributos retornados na função "obtemAtributoSelecionado"
        var atributoSelecionado = obtemAtributoSelecionado();
    //variáveis que armazenam o valor dos atributos definidos especificamente para elas (uma para a carta do jogador e outra para a carta da máquina)
        var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
        var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    //variável que aloca o espaço da tag <h2> com id="resultado"
        var atributoResultado = document.getElementById("resultado");
    //condicional caso o valor do atributo escolhido pelo jogador for maior que o seu respectivo atributo na carta da máquina
        if (valorCartaJogador > valorCartaMaquina) {
            atributoResultado.innerHTML = "Você venceu! O valor do seu atributo é maior que do adversário";
            document.getElementById("btnJogarNovamente").disabled = false;
        }
    //condicional caso o valor do atributo escolhido pelo jogador for menor que o seu respectivo atributo na carta da máquina     
        else if (valorCartaJogador < valorCartaMaquina) {
            atributoResultado.innerHTML = "Você perdeu! O valor do seu atributo é menor que do adversário";
            document.getElementById("btnJogarNovamente").disabled = false;
        } 
    //condicional caso o valor do atributo escolhido pelo jogador for igual ao seu respectivo atributo na carta da máquina    
        else if (valorCartaJogador = valorCartaMaquina) {
            atributoResultado.innerHTML = "Empate! O valor do seu atributo é igual ao de seu adversário";
            document.getElementById("btnJogarNovamente").disabled = false;
        }
    //condicional caso o jogador não selecione nenhum atributo
        else if (valorCartaJogador == valorCartaMaquina) {
            alert("Selecione um atributo!!");
            return false;
        }
    //comando para desabilitar o botão "Jogar" após o usuário clicar no mesmo
        document.getElementById("btnJogar").disabled = true;
    //executa a função de exibir a carta sorteada da máquina
        exibirCartaMaquina();
}
  
//função que exibe a carta sorteada do jogador
function exibirCartaJogador() {
        
    //variável que aloca o espaço da tag <div> com id="carta-jogador" 
        var divCartaJogador = document.getElementById("carta-jogador");
    //alteração do imagem de fundo da div no CSS pelo JS
        divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //variável para armazenar a imagem da moldura da carta
        var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;"/>';
    //variável para armazenar o nome da carta sorteada para o jogador
        var nomeDaCartaJogador = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    //variável para armazenar o valor dos atributos
        var tagHTML = "<div id='opcoes' class='carta-status'>";
    //variável iniciada para o preenchimento com os atributos   
        var opcoesDeAtributosTexto = "";
    //for para a variável opçõesDeAtributosTexto (gera os inputs com os atributos e seu valores, com quebra de linha entre si)  
        for (var atributo in cartaJogador.atributos) {
            opcoesDeAtributosTexto += "<input type='radio' name='atributo' value='" + atributo + "'/>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
        }
    //escreve na div as variáveis escolhidas (moldura;nomeDaCartaJogador;tagHTML e opçõesDeAtributosTexto)
        divCartaJogador.innerHTML = moldura + nomeDaCartaJogador + tagHTML + opcoesDeAtributosTexto + "</div>";
}
  
function exibirCartaMaquina() {
        
    //variável que aloca o espaço da tag <div> com id="carta-maquina"     
        var divCartaMaquina = document.getElementById("carta-maquina");
    //alteração do imagem de fundo da div no CSS pelo JS
        divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //variável para armazenar a imagem da moldura da carta
        var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;"/>';
    //variável para armazenar o nome da carta sorteada para a máquina
        var nomeDaCartaMaquina = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    //variável para armazenar o valor dos atributos    
        var tagHTML = "<div id='opcoes' class='carta-status'>";
    //variável iniciada para o preenchimento com os atributos
        var opcoesDeAtributosTexto = "";
    //for para a variável opçõesDeAtributosTexto (gera os parágrafos com os atributos e valores da carta da máquina)
        for (var atributo in cartaMaquina.atributos) {
            opcoesDeAtributosTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
        }
    //escreve na div as variáveis escolhidas (moldura;nomeDaCartaMáquina;tagHTML e opçõesDeAtributosTexto)    
        divCartaMaquina.innerHTML = moldura + nomeDaCartaMaquina + tagHTML + opcoesDeAtributosTexto + "</div>";
}
