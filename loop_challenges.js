// 1 Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
function getOdds(max){
    var odds = []
    for (var i = 1; i <= max; i++){
        if (i % 2 != 0){
            odds.push(i)
        }
    }
    return odds;
}
console.log(getOdds(20))

// 2 Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
function mult3(max){
    mult_per_3 = []
    for (var i = max; i >= 1; i--){
        if(i % 3 == 0){
            mult_per_3.push(i)
        }
    }
    return mult_per_3
}
console.log(mult3(100))

// 3 Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
function decreasingLoop(max,min,factor){
    sequence = []
    for (max; max >= min; max -= factor){
        sequence.push(max)
    }
    return sequence
}
console.log(decreasingLoop(4,-4,1.5))

// 4 Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
function sigma(max){
    var sum = 0;
    var log = ""
    for (var i = 1; i <= max; i++){
        if (i == max){
            log += (`${i}. `)
            sum += i;
        }
        else{
            log += (`${i} + `)
            sum += i;
        }
    }
    log += (`Total is ${sum}`)
    return log
}
console.log(sigma(100))

// 5 Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
function factorial(max){
    var sum = 1;
    var log = ""
    for (var i = 1; i < max; i++){
        if (i == max-1){
            log += (`${i}*${max}. `)
            sum += sum * i;
        }
        else{
            log += (`${i}*`)
            sum += sum * i;
        }
    }
    log += (`Total is ${sum}`)
    return log
}
console.log(factorial(100))