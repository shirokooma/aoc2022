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
    switch(myArray[i]){
        case "A Y":
        case "B Z":
        case "C X":
            myScore += 6;
            break;
        case "A X":
        case "B Y":
        case "C Z":
            myScore += 3;
            break;
        default:
            myScore += 0;
    }
    i++;
}
console.log(myScore);