//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//Question 4 solution
//declaring hiding button and square Div element
const toggleAnswer = document.getElementById("toggleAnswer");
const squareDiv = document.querySelector(".square");
//resolve // QUESTION 1 here
const myElement = document.querySelector("#a-1");
//Question 4 solution
//hiding answer of Q1 on click and changing content of the button from Hide to Display
toggleAnswer.addEventListener("click", () => {
  if (squareDiv.style.display == "none") {
    toggleAnswer.textContent = "Hide Question 1";
    squareDiv.style.display = "block";
  } else {
    toggleAnswer.textContent = "Display Question 1";
    squareDiv.style.display = "none";
    console.log(squareDiv);
  }
});
//function to solution of Q1
//square changes its content from x to 0 on click
myElement.addEventListener("click", () => {
  if (myElement.textContent == "x") {
    myElement.textContent = "0";
  } else {
    myElement.textContent = "x";
  }
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
//Question 4 solution
//declaring hiding button and colors Div element
const toggleAnswer2 = document.getElementById("toggleAnswer2");
const colorsDiv = document.querySelector(".colors");
// //Q2 solution
const colors = ["red", "white", "black", "green", "orange"];
const select = document.createElement("select");
const divElement = document.getElementById("a-2");
//Question 4 solution
//hiding answer of Q2 on click and changing content of the button from Hide to Display
toggleAnswer2.addEventListener("click", () => {
  if (colorsDiv.style.display == "none") {
    toggleAnswer2.textContent = "Hide Question 2";
    colorsDiv.style.display = "block";
  } else {
    toggleAnswer2.textContent = "Display Question 2";
    colorsDiv.style.display = "none";
    console.log(colorsDiv);
  }
});
//going through the array of colors and creating dropdown list with 'option'
//new element gets value of the array of colors
for (let i = 0; i < colors.length; i++) {
  let optionElement = document.createElement("option");
  optionElement.value = colors[i];
  optionElement.textContent = colors[i];
  select.appendChild(optionElement);
}
divElement.appendChild(select);
//creating a button that removes element from the dropdown list on click
const remove = document.createElement("button");
remove.textContent = "Remove";
remove.addEventListener("click", () => {
  select.options[select.selectedIndex].remove();
});
divElement.appendChild(remove);



//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

//Question 4 solution
//declaring hiding button sphere Div element, selecting sphere class
const toggleAnswer3 = document.getElementById("toggleAnswer3");
const sphereDiv = document.querySelector(".sphere");
//Q3
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let area = document.getElementById("area");
//Question 4 solution
//hiding answer of Q3 on click and changing content of the button from Hide to Display
toggleAnswer3.addEventListener("click", () => {
  if (sphereDiv.style.display == "none") {
    toggleAnswer3.textContent = "Hide Question 3";
    sphereDiv.style.display = "block";
  } else {
    toggleAnswer3.textContent = "Display Question 3";
    sphereDiv.style.display = "none";
    console.log(sphereDiv);
  }
});
//function to solution of Q3
const calculate_sphere = (event) => {
  event.preventDefault(); //secure the web page from auto update
  if (radius.value !== 0) {
    volume = (4 / 3) * Math.PI * Math.pow(radius.value, 3); //to the 3rd power
    area = 4 * Math.PI * Math.pow(radius.value, 2);
    document.getElementById("volume").value = volume;
    document.getElementById("area").value = area;
  }
};

window.onload = document.getElementById("MyForm").onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer.

//resolve // QUESTION 4 here
//solution of Question 4 is a part of the code of every question above
