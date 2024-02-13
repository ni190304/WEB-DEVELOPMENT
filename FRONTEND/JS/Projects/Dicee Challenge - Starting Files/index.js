var i = Math.floor(Math.random()*6) + 1;

console.log(i);

document.querySelector(".img1").setAttribute("src",`images/dice${i}.png`);

var j = Math.floor(Math.random()*6) + 1;

console.log(j);

document.querySelector(".img2").setAttribute("src",`images/dice${j}.png`);

if (i < j) {
    document.querySelector("h1").textContent = "Player 2 wins";
}
else if(i > j){
    document.querySelector("h1").textContent = "Player 1 wins";
}
else{
    document.querySelector("h1").textContent = "Draw";
}