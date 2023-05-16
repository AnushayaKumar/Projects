
var randomNumber1 =Math.floor(Math.random() * 6) + 1;
var image = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",image);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image1);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 won";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").textContent = "Player 2 won";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent = "Draw";
}
