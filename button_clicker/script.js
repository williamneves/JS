function onOrOff(element){
    if (element.innerText == 'LOGIN'){
        element.innerText = "LOGOFF"
    }
    else {
        element.innerText = "LOGIN"
    }
}
function hiddenObj(element){
    element.style = "display: none;"
}
var numberpost1 = 24
function alertChangeLike1(element){
    numberpost1++
    alert("This got 1 more like, now is "+numberpost1+" likes")
    element.innerText = numberpost1 + " likes"    
}
var numberpost2 = 99
function alertChangeLike2(element){
    numberpost2++
    alert("This got 1 more like, now is "+numberpost2+" likes")
    element.innerText = numberpost2 + " likes"    
}
var numberpost3 = 18
function alertChangeLike3(element){
    numberpost3++
    alert("This got 1 more like, now is "+numberpost3+" likes")
    element.innerText = numberpost3 + " likes"    
}