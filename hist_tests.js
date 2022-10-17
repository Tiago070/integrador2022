const text = ["Olá Jogador, me sinto lisonjeada por sua escolha ser minha pessoa. Antes de adentrar a história, que tal conhecer mais sobre a minha? 1.Não 2.Sim"];

const option_1 = ["Filha de Maria Teresa da Áustria e de Francisco I do Sacro Império Romano-Germânico, nunca teve amor maternal de seus pais, por conta de assuntos de estado."]

var text_typing = String(text[0]);
var counter = 0;

function typing(){
    if(counter < text_typing.length){
        document.getElementById("text").innerHTML += text_typing.charAt(counter);
        
        counter += 1;

        setTimeout(typing, 30);
    };

}

function opt1(){
    text_typing = String(option_1[text.indexOf(text_typing)]);

    counter = 0

    typing()
}
