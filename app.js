const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "purple"];

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let number = RandomNumber();
    document.body.style.backgroundColor = colors[number];
    document.querySelector(".color").innerHTML = colors[number]
})

function RandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
