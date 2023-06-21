# Etch
Etch A Sketch Project


My Pseudocode 19 June 2023:

<!-- HTML -->
div container
    div vertical
        div horizontal pixels

div pen
    div color
        1 = black, 
        2 = yellow, 
        3 = orange,
        4 = red, 
        5 = green,
        6 = blue, 
        7 = purple
        8 = brown, 

    div rainbow mode

    div eraser
        white

div clear
div pen sizes
    button L, M, S

div footer 
    thank you people who made awesome things and give it for free on the internet. ily.
<!-- CSS -->

main-container


    h3
    fontsize
    style
    color black

        container
            max-width 960px
            position relative
            border ridge red 3em
            border-radius 1em
            display: flex
            flex-direction: column

            vertical
                flex 1
                display: flex;

                horizontal pixels
                    flex 1
                    border: solid 1px gray
                    background-color: white;




        pen
            position absolute

            color
                create 8 squares or circles for them to click on

            rainbow mode -- random color

            eraser -- white

        container2
            button
            clear

<!-- JS -->
const div container

const div create vertical divs
className for vertical divs = vertical
const div create horizontal divs (pixels)
className for horizontal divs = pixels

const penColor 
const rainbowMode
const eraser 

1. Pixel Size -- Large (16x16); Medium (32x32); Small (64X64)
    if (Large selected -- event listener -- click, ()=>{
        divCount 16 for Large
        divCount 32 for Medium
        divCount 64 for Small
    })

2. Div Spawner
        for (let i = 0; i < divCount; i ++){
            create divs vertical
        } 
        for (let j = 0; j < divCount; j ++){
            create divs horizontal
        }
        .container-div{
} 
Despawner required to remove spawned divs



3. Random Color
    random color = Math.floor(Math.random()*8 +1) 
        1 = black, 
        2 = yellow, 
        3 = red, 
        4 = orange, 
        5 = green,
        6 = blue, 
        7 = purple
        8 = brown, 
    -> change to random rgb 0-255 r,g,b

4. Selecting colors for the background color
    selected-color: 
    pen-color event listener "click" ,()=>{
        grab id name for the div = color
        color        
    }
    pen-rainbow event listener "click", ()=>{
        random color
    }
    pen-eraser event listener "click", ()=>{
        white
    }

5. Function for coloring the container div
    when mouse is in container:
    eventListener for mousedown
        apply background color = selected-color
    eventListener for mouseup
        don't apply background color

6. Clear Function
    all div reset to white background color
        
21 June

1. Fix background to fit any phone. It currently stretches over.
2. Fix the background image. It is not loading.