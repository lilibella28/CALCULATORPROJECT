const bottoms = [
  7,
  8,
  9,
  "+",
  "-",
  4,
  5,
  6,
  "*",
  "/",
  1,
  2,
  3,
  "%",
  "=",
  "+",
  0,
  0,
  0,
  5,
];

const operation = {
  "+": (a, b) => {
    return a + b;
  },
  "-": (a, b) => {
    return a - b;
  },
  "*": (a, b) => {
    return a * b;
  },
  "/": (a, b) => {
    return a / b;
  },
  "%": (a, b) => {
    return a % b;
  },
  AC: () => {
    return 0;
  },
};

let number1 = 4;
let number2 = 4 ;
let promtUserv = "*";
const operations = operation[promtUserv](number1, number2);
const divElement = document.querySelector("div");
let inputEl = document.querySelector("#input");

//This function loop through the array full of bottom and retturn only
// the bottom that conttain number



//This function loop thow the array and return only value that are
//string


// I need to add a render funciton


function newbuttons() {
  bottoms.forEach((num) => {
    const newbtn = document.createElement("button");
    divElement.appendChild(newbtn);
    newbtn.addEventListener("click", function (e) {
      e.target.style.color = "red";
      inputEl.innerHTML = e.target.innerHTML;
      if (typeof num === "number") {
        number1 = num;
        alert("this is a number1 testing " + number1);
      }
      if (typeof num !== "number") {
        promtUserv = num;
        alert(`no a number at all  user s${promtUserv}`);
      }
    });
    if (num === "=") {
     
      newbtn.setAttribute("onclick", "btnToequal() ");
    }
     
    return (newbtn.innerHTML = num);
  });
}
//=====the newbuttons function what is trying to do is create a bottom element
//base on the bottoms list, the add and eveent listeners when the user click a bottom it change the global variable number 1 and promtUserr

//The problem I have is that the value are only changing inside the newbutton function

/**
 * Thing that i have tried.
 * I create Permanenly variablee
 * I can break the function into  honesly, like a function for creating the bottom and addEvenlisterr for when the user click
 * I user alert to make surrre the value are passing
 * === Its important that the value pass becuase I am using it as property, for the object that hold tthe operations
 * 
 * 
 */

// I know i need to add  a second number 


/**
 * 
 * return the operation based on the user sign choose 
 if(userOperattionchoose = anyproperty name)
     return that property value.
     
 */



function btnToequal() {
  return (inputEl.innerHTML = operations);
}


newbuttons();

// function newbuttons() {
//   bottoms.forEach((num) => {
//     const newbtn = document.createElement("button");
//     divElement.appendChild(newbtn);
//     newbtn.addEventListener("click", function (e) {
//       e.target.style.color = "red";
//       inputEl.innerHTML = e.target.innerHTML;
//       promtUserv = e.target.getAttribute("data-operator");
//     });
//     if (num === "=") {
//       newbtn.setAttribute("onclick", "btnToequal() ");
//     }
//     if (typeof num === "string") {
//       newbtn.setAttribute("data-operator", `${num}`);
//     }
//     if(typeof num === "number"){
//       number1 = num
//     }
//     return (newbtn.innerHTML = num);
//   });

//   return inputEl.innerHTML;
// }
