var input = document.querySelector("input");

var data = [
    {name: " Madhvi", src: "https://images.unsplash.com/photo-1545195191-e26fd6171ab7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: " Madhu", src: "https://plus.unsplash.com/premium_photo-1682431006168-513cb7b1b9d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: " Madhuri", src: "https://images.unsplash.com/photo-1581594083255-4f24b8252bb6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: " Madhami", src: "https://images.unsplash.com/photo-1667382137349-0f5cb5818a7c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                <div class="img">
               <img src=${elem.src}></div>
                <h4>${elem.name}</h4>
            </div>`
})
document.querySelector(".people").innerHTML = pers;


input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value) 
    })

    var newusers = "";
    matching.forEach(function(elem){
        newusers += `<div class="person">
                    <div class="img">
                   <img src=${elem.src}></div>
                    <h4>${elem.name}</h4>
                </div>`
    })

    document.querySelector(".people").innerHTML = newusers;
})