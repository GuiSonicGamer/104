// geração do valor aleatório
var y = Math.floor(Math.random()*10+1);
var guess = 1;
var player_name = localStorage.getItem("player_name")
function submit()
{
    var x = document.getElementById("guessField").value;
    if(x==y)
{
    alert("Parabéns "+player_name+"! Você acertou em "+guess+" tentativas!")
    guess = 1;
}
else if(x>y)
{
    alert("Você errou! Tente um número menor!")
    guess++;
}
else
{
    alert("Voce errou! Tente um número maior!")
    guess++;
}
}

function playAgain()
{
    y = Math.floor(Math.random()*10+1)
}
// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
