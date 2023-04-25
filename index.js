// document.getElementById("count-el").innerText = 5
// pseudo code

// initialise the count to 0
// listen for clicks on the increament button 
// increamentthe count variable when the button is clicked
// change the count-el in the html to reflect the new count

let countEl = document.getElementById("count-el");
let savevalue = document.getElementById("save-value");
let sumvalue = document.getElementById("sum-value");

let count = 0;
let sumi = 0;
function increament() {
    count++;
    countEl.innerText = count;
}

// text content or inner text  dono same h


function save(){
    sumi += count;
    let countstr = count + ",  ";
    savevalue.textContent += countstr;
    count = 0;
    countEl.textContent = count;
    
}

function sum(){
    sumvalue.innerHTML = "Total entries: "+sumi;
}