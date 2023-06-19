//Selecting stuff
const container = document.querySelector(".container-test");
const rainbow = document.querySelector(".rainbow-mode");
const eraser = document.querySelector(".eraser");

// const button = document.querySelector("button");
const large = document.querySelector("#large");
const med = document.querySelector("#med");
const small = document.querySelector("#small");
const clear = document.querySelector(".clear");
const color = document.querySelectorAll(".color");

//finding color selected
color.forEach((item)=>{
    console.log(item.id);
})

//div spawner
let divCount = 16;
let spawnDiv = function (dC){
    for (let i = 0; i < dC; i ++){
    const makeVertical = document.createElement("div");
    makeVertical.classList.add("vertical");
    container.appendChild(makeVertical);
    for (let j = 0; j < dC; j++){
        const makePixel = document.createElement("div");
        makePixel.classList.add("pixels"); 
        makeVertical.appendChild(makePixel);       
    }}
    
}

spawnDiv(16);

//Despawn divs
let despawn = function(){
while(container.hasChildNodes()){
    container.removeChild(container.lastChild);
}};

//Listen for pen size
large.addEventListener("click",()=>{
    despawn();
    divCount = 16;   
    spawnDiv(divCount);
});
med.addEventListener("click",()=>{ 
    divCount = 32;
    despawn();
    spawnDiv(divCount);
});
small.addEventListener("click",()=>{
    divCount = 64;
    despawn();
    spawnDiv(divCount)
});


//Random color (not done yet)
// let colorArr = ["black", "yellow","red", "orange","green","blue","purple","brown"];
// let randomColor = function(arr){
//     for (index in arr)
//     console.log(arr[rNum])
// }

// rainbow.addEventListener("click", ()=>{
//     randomColor(colorArr);
// })