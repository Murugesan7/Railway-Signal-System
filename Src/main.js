const away = document.querySelector("#s");
const enter = document.querySelector("#s1");
const post1 = document.querySelector("#s2");
const post2 = document.querySelector("#s3");
const post3 = document.querySelector("#s4");

const light1 = document.getElementById("circle col1");
const light2 = document.getElementById("circle col2");
const light3 = document.getElementById("circle col3");
const light4 = document.getElementById("circle col4");
const para = document.getElementById("p");

console.log(light1);

away.addEventListener("click", ()=> {
    light1.style.background = "";
    light2.style.background = "";
    light3.style.background = "";
    light4.style.background = "green";
    light4.style.boxShadow="0 0 60px 10px green;";
    
})

light4.addEventListener("click", ()=> {
    para.innerHTML="   *** Oii AMMU ***   ";
    
})

enter.addEventListener("click", ()=> {
    light1.style.background = "red";
    light1.style.boxShadow="0 0 60px 10px red;";
    light2.style.background = "";
    light3.style.background = "";
    light4.style.background = "";

})

post1.addEventListener("click", ()=> {
    light1.style.background = "";
    light2.style.background = "";
    light3.style.background = "yellow";
    light3.style.boxShadow="0 0 60px 10px yellow;";
    light4.style.background = "";

})

post2.addEventListener("click", ()=> {
    light1.style.background = "";
    light2.style.background = "yellow";
    light2.style.boxShadow="0 0 60px 10px yellow;";
    light3.style.background = "yellow";
    light3.style.boxShadow="0 0 60px 10px yellow;";
    light4.style.background = "";

})

post3.addEventListener("click", ()=> {
    light1.style.background = "";
    light2.style.background = "";
    light3.style.background = "";
    light4.style.background = "green";
    light4.style.boxShadow="0 0 60px 10px green;";

})
