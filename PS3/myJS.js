/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

let colorBlock = document.getElementById("color-block");
let clickNumber = 0;
colorBlock.addEventListener("click", changeColor);

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(clickNumber % 2 == 0){
        //change the background color using JS
        colorBlock.style.background = "#d3d3d3";
        
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").textContent="#d3d3d3";
    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").textContent = "#F08080";

    }
    clickNumber++;
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

let button = document.getElementById("convertbtn");
button.addEventListener('click', convertTemp);

function convertTemp(){
    //Calculate the temperature here
    let fahrenheit = document.getElementById("f-input").value;
    let celsius = (fahrenheit - 32)* 5/9;
    //Send the calculated temperature to HTML
    document.getElementById("c-output").textContent = celsius;
}


