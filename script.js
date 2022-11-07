var escolha1 = 0
var escolha2 = 0
var escolha3 = 0
var jogador = {
    vida: 100
}
var inimigo1 = {
    vida: 100
}
var inimigo2 = {
    vida: 100
}
var inimigo3 = {
    vida: 100
}

function exibirregras(){
    var Element = document.getElementById("topicos");
    Element.innerHTML = "1. Escolha o personagem;.<br>2. Leia as instruções nos quadros;<br>3. Analise as informações e faça sua escolha;<br>4. Prossiga a história seguindo as orientações.";
}
/*js botão menu*/
$('.toggle-menu').click (function(){
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
});
