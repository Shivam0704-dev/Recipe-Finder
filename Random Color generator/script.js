console.log("script js initializing");
// let boxes = document.getElementsByClassName("box");
// let boxes = document.querySelector(".container").children;
// // console.log(boxes);

// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(boxes).forEach(e=>{
//     // console.log(e);
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = getRandomColor();
// })

// Another way 

let boxes = document.querySelectorAll(".box");

for (let index = 0; index < boxes.length; index++) {
    let box = boxes[index];

    //generate random color (16777215 is white in decimal)
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    //generate random Background (16777215 is white in decimal)
    let randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    //Assign random color and background

    box.style.color = randomColor;
    box.style.backgroundColor = randomBackgroundColor;

    //set content to show color code.

    box.textContent = randomColor;
}