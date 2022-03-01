function drawOnOff(){
    var content = '<button onclick="onOrOff(this)"><i class="fa-solid fa-right-to-bracket"></i> LOGIN</button>';
    document.getElementById("button-login").innerHTML = content;
}
drawOnOff()