function drawOnOff(){
    var content = '<button onclick="onOrOff(this)"><i class="fa-solid fa-right-to-bracket"></i> LOGIN</button>';
    document.getElementById("button-login").innerHTML = content;
}
drawOnOff()

function onOrOff(element){
    console.log(element.innerText)
    if (element.innerText == ' LOGIN'){
        console.log(true)
        element.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> LOGOUT'
    }
    else {
        element.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> LOGIN'
    }
}
function hiddenObj(element){
    element.style = "display: none;"
}
var numberpost1 = 24
function alertChangeLike1(element){
    console.log(element.innerText)
    numberpost1++;
    alert("This got 1 more like, now is "+numberpost1+" likes");
    element.innerText = numberpost1 + " likes";
}
var numberpost2 = 99
function alertChangeLike2(element){
    numberpost2++;
    alert("This got 1 more like, now is "+numberpost2+" likes")
    element.innerText = numberpost2 + " likes"; 
}
var numberpost3 = 18
function alertChangeLike3(element){
    numberpost3++;
    alert("This got 1 more like, now is "+numberpost3+" likes")
    element.innerText = numberpost3 + " likes";    
}