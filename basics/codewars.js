"use strict";
// function sumOfDifferences(arr: number[]): number {
//     if(arr.length === 0 || arr.length === 0 ) return 0;
//     arr.sort((a,b) => b - a)
//     let point1 = 0;
//     let point2 = 1;
//     let sum : number = 0;
//     while(point2 < arr.length){
//       let add : number = arr[point1] - arr[point2];
//       sum += add;
//       point1++
//       point2++
//     }
//     return sum;
//   }
//   console.log(sumOfDifferences([-3, -2, -1]))
const xor = (a, b) => {
    const arr = [a, b];
    return arr.filter((condition, i) => condition === true).length === 1;
};
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let secondsToShark = sharkDistance / sharkSpeed;
    if (dolphin === true)
        secondsToShark / 2;
    let secondsToDock = pontoonDistance / youSpeed;
    if (secondsToDock > secondsToShark) {
        return "Shark Bait!";
    }
    else {
        return "Alive!";
    }
}
console.log(shark(12, 50, 4, 8, true));
console.log(shark(24, 0, 4, 8, true));
console.log(shark(40, 35, 3, 20, true));
