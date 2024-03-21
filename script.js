let inp=document.querySelector('input');
let p=document.querySelector('p');
let btn=document.querySelector('button');

inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText=inp.value;
});

btn.addEventListener("click", function(){
    console.log("Sumited form");
    p.innerText="Sumited You form!";
})
