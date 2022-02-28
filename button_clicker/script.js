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
    alert("this got 1 more like"+numberpost1+" likes"   )
    element.innerText = numberpost1 + " likes"    
}
var numberpost2 = 99
function alertChangeLike2(element){
    numberpost2++
    alert("this got 1 more like"+numberpost2+" likes"   )
    element.innerText = numberpost2 + " likes"    
}
var numberpost3 = 18
function alertChangeLike3(element){
    numberpost3++
    alert("this got 1 more like"+numberpost3+" likes"   )
    element.innerText = numberpost3 + " likes"    
}