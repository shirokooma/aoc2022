let round = prompt("Enter input.");
let myArray = round.split("\n");

let i = 0;
while(i < myArray.length){
    let myChar = myArray[i].charAt(2);
    console.log(myChar);
    i++;
}