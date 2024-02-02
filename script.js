let poo = window.prompt("Gamer 1 :");
let foo = window.prompt("Gamer 2 :");
document.getElementById("p1").innerHTML = poo;
document.getElementById("p2").innerHTML = foo;

function Click() {
    var randm = Math.floor(Math.random() * 6) + 1;
    var imgr1 = "images/dice" + randm + ".png";

    var randm2 = Math.floor(Math.random() * 6) + 1;
    var imgr2 = "images/dice" + randm2 + ".png";

    document.getElementById("im1").setAttribute("src", imgr1);
    document.getElementById("im2").setAttribute("src", imgr2);

    if (randm > randm2) {
        document.getElementById("result").innerHTML = poo + " Wins pog";

    }
    if (randm < randm2) {
        document.getElementById("result").innerHTML = foo + " has won";
    }
    if (randm == randm2) {
        document.getElementById("result").innerHTML = "Itz a Draw";
    }
}