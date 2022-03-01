var isC = true;
var cTemp = document.querySelectorAll(".max-temp,.min-temp");
function setCclass(){
    for (var i = 0; i < cTemp.length;i++){
        cTemp[i].classList.add("celsius")
    }
}
setCclass()
function celciusToF(){
    if (!isC){
        for (var i = 0; i < cTemp.length;i++){
            cTemp[i].innerText = Math.round(((cTemp[i].innerText - 32)*5/9))
            isC = true
            cTemp[i].classList.add("celsius")
            cTemp[i].classList.remove("farh")
        }
    }
    else{
        for (var i = 0; i < cTemp.length;i++){
            cTemp[i].innerText = Math.round(((cTemp[i].innerText * 9/5)+32))
            isC = false
            cTemp[i].classList.add("farh")
            cTemp[i].classList.remove("celcius")
        }   
    }
}
function displayAlert(){
    alert('Loading weather report...')
}
function hiddenCookies(){
    document.getElementById("cookies-pop").style.display = "none";
}
// var cTemp = document.querySelectorAll(".max-temp,.min-temp");
// var fTemp = cTemp
// for (var i = 0; i < fTemp.length;i++){
//     console.log(fTemp[i].innerText)
//     fTemp[i].innerText = Math.round(((cTemp[i].innerText * 9/5)+32))
//     console.log(fTemp[i].innerText)
// }