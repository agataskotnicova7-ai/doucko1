function zmenaObrazku()
{
document.getElementById("obrazek").src = "images/Screenshot 2026-09-30 161050.png";
document.getElementById("obrazek").alt = "zmenaObrazku";
}
function les()
{
document.getElementById("obrazek").src = "images/67zvQS9VhciB.jpg";
document.getElementById("obrazek").alt = "les";
}
function zmena()
{
    if(document.getElementById("zmenaObrazku").alt == ("les"))
    {
        hafan();
    }
    else
    {
        les();
    }
}