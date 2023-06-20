//Selecting stuff
const container = document.querySelector(".container-test");
const rainbow = document.querySelector(".rainbow-mode");
const eraser = document.querySelector(".eraser");

//selecting color
const color = document.querySelectorAll(".color");
const button = document.querySelectorAll("button");
const clear = document.querySelector(".clear");

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


//selecting pixels
let pixels = document.querySelectorAll(".pixels");

//Despawn divs
let despawn = function(){
while(container.hasChildNodes()){
    container.removeChild(container.lastChild);
}};

//create a variable to contain current color selected + rgb for random
let colorSelected;
let randomSelected = false;

//Random color 0-255 (random up to 256 and including 255)
let randomColor = function(){
    return Math.floor(Math.random()*256)
}

//return rgb random in string
let randomC = function(){
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

//listen for rainbow clicks
rainbow.addEventListener("click", ()=>{
    randomSelected = true;
    pixels.forEach((pixel)=>{
        if (randomSelected === true){
            pixel.addEventListener("mouseover", ()=>{
                pixel.style.backgroundColor = randomC();
            })
        }else if (randomSelected === false){
            pixel.addEventListener("mouseover", ()=>{
                pixel.style.backgroundColor = colorSelected;
            })
        }
    })
    
});


// finding color selected when clicked
color.forEach((item)=>{
    item.addEventListener("click", (item)=>{
        randomSelected = false;
        colorSelected = item.target.id;
        pixels.forEach((pixel)=>{
    if (randomSelected === true){
        pixel.addEventListener("mouseover", ()=>{
            pixel.style.backgroundColor = randomC();
        })
    }else if (randomSelected === false){
        pixel.addEventListener("mouseover", ()=>{
            pixel.style.backgroundColor = colorSelected;
        })
    }
})

    })
});

//eraser clicks
eraser.addEventListener("click", ()=>{
    randomSelected = false;
    colorSelected = "white";
    pixels.forEach((pixel)=>{
        if (randomSelected === true){
            pixel.addEventListener("mouseover", ()=>{
                pixel.style.backgroundColor = randomC();
            })
        }else if (randomSelected === false){
            pixel.addEventListener("mouseover", ()=>{
                pixel.style.backgroundColor = colorSelected;
            })
        }
    })
});

//clear clicks
clear.addEventListener("click",()=>{   
    pixels.forEach((pixel)=>{
        randomSelected = false;
        pixel.style.backgroundColor = "white";
        colorSelected = "white";
    })
})


//Listen for pen size
button.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        despawn();
        if (e.target.id === "large"){
            divCount = 16;
        } else if (e.target.id === "med"){
            divCount = 32;
        } else if (e.target.id === "small"){       
            divCount = 64;        
        }
        spawnDiv(divCount);

        pixels = document.querySelectorAll(".pixels");
        pixels.forEach((pixel)=>{
            if (randomSelected === true){
                pixel.addEventListener("mouseover", ()=>{
                    pixel.style.backgroundColor = randomC();
                })
            }else if (randomSelected === false){
                pixel.addEventListener("mouseover", ()=>{
                    pixel.style.backgroundColor = colorSelected;
                })
            }

        })             
    })

})


pixels.forEach((pixel)=>{
    if (randomSelected === true){
        pixel.addEventListener("mouseover", ()=>{
            pixel.style.backgroundColor = randomC();
        })
    }else if (randomSelected === false){
        pixel.addEventListener("mouseover", ()=>{
            pixel.style.backgroundColor = colorSelected;
        })
    }
})

