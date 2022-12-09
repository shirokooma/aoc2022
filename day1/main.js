let text = prompt("Enter input.");
let top1 = 0;
let top2 = 0;
let top3 = 0;
let num = 0;
const myArray = text.split("\n");
let arrayLength = myArray.length;
for (let i = 0; i < arrayLength ; i++) {
    if(myArray[i] !== ""){
      num += +myArray[i];
      }
    else{
      if(num > top1){
        top3 = top2;
        top2 = top1;
        top1 = num;
        }
      else if(num > top2){
        top3 = top2;
        top2 = num;
        }
      else if(num > top3){
        top3 = num;
        }
      num = 0;
      }
  }
if(num > top1){
  top3 = top2;
  top2 = top1;
  top1 = num;
}
else if(num > top2){
  top3 = top2;
  top2 = num;
}
else if(num > top3){
  top3 = num;
}
console.log(top1);
console.log(top2);
console.log(top3);
console.log(top1 + top2 + top3);