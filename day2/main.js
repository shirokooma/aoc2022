let round = prompt("Enter input.");
let myArray = round.split("\n");

let myScore = 0;
let i = 0;
while(i < myArray.length){
    let myChar = myArray[i].charAt(2);
    switch(myChar){
        case "X":
            myScore += 1;
            break;
        case "Y":
            myScore += 2;
            break;
        case "Z":
            myScore += 3;
    }
    i++;
}
console.log(myScore);