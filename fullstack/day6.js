let div = document.createElement("div");
        div.id = "parent";
        div.style.backgroundColor = "lightblue"; // Corrected backgroundColor
        div.style.width = "200px";
        div.style.height = "200px";
        document.body.appendChild(div)


let button = document.createElement('button');
button.innerHTML = "<b> Change Text</b>"
button.id="btn";
document.body.appendChild(button);

let para = document.createElement("p");
para.id="p";
para.innerText  = "Insert here"
document.body.appendChild(para);

document.getElementById("btn").addEventListener;


document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("p").innerHTML = "<b>Hello world</b>";
});

// document.getElementById("btn").onclick=function(){