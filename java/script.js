console.log("hello world");

/*target html button element */

//related to the text
let button=document.querySelector("#button-name");
let inputName=document.querySelector("#input-name");
//change title color
let buttonColor=document.querySelector("#button-color");
let inputColor=document.querySelector("#input-color");
//html element related to the target
let target=document.querySelector("#target");

console.log(button);
console.log(inputName);
console.log(buttonColor);
console.log(inputColor);
console.log(target);

button.addEventListener("click",function(){
            console.log(inputName.value);
            target.innerHTML=inputName.value;
            //replace content of the target
     });
     
     
//listen to the click
buttonColor.addEventListener("click",function(){
    //get color value and update the color
    target.style.color=inputColor.value;

});


/*
#######################################################################

to do list

#######################################################################


*/


//1.create link to html elements
let buttonToDo=document.querySelector("#toDoButton");
let inputToDo=document.querySelector("#toDoInput");
let toDoList=document.querySelector("#toDo");

//2.listen to the click
buttonToDo.addEventListener("click", function(){
    
    //3. get input value
    let currentToDo = inputToDo.value;

    //4 - we create a list of element
    let newLiElement =`<li>${currentToDo}</li>`;


    //5 - we add it inside the ul element
    toDo.innerHTML+=newLiElement;

})
