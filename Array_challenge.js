function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            arr[i] = "yummi"
        }
        else {
            arr.splice(i,1);
            i--;
        }
    }
    if(arr.length == 0){
        console.log("I'm hungry!")
    }
    else {
        console.log(arr.toString())
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

/////////////////////////////////////////
// 2 High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//////////////////////////////////////
/// 3 Better than average

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i += 1){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0

    for (var i = 0; i < arr.length; i += 1){
        if (arr[i] > avg){
            count++
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//////////////////////////////////////
/// 4 Array Reverse
// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    // your code here
    var i = 0
    var x = arr.length
    var temp = ""
    while (x > i){
        temp = arr[i]
        arr[i] = arr[x-1]
        arr[x-1] = temp
        x--;
        i++;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//////////////////////////////////////
/// 5 Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature. 
// Write a function that will return an array of Fibonacci numbers up to a given length n.
// Fibonacci numbers are calculated by adding the last two values in the sequence together. 
// So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var i = 0;
    // your code here
    while (fibArr.length != n){
        fibArr.push(fibArr[i]+fibArr[i+1]);
        i++;
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]