let inp = document.querySelector("input");
let btn = document.querySelector("button");
let u = document.querySelector("ul");


btn.addEventListener("click", function() {

    let t = document.createElement("li");
    t.innerText = inp.value;
    u.appendChild(t);
    inp.value = "";

});