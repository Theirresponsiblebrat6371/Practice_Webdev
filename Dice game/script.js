var rollNo = Math.floor(Math.random() * 6) + 1;

var diceName = "dice " + rollNo + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", "images/" + diceName);

var rollNo1 = Math.floor(Math.random() * 6) + 1;

var diceName1 = "dice " + rollNo1 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "images/" + diceName1)


if (rollNo > rollNo1) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (rollNo < rollNo1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}