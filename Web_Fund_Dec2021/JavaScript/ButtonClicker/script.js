function loginBtn(x) {
    if(x.innerText == "Login") {
        x.innerText = "Logout";
    } 
    else {
        x.innerText = "Login";
    }
}
function message() {
    alert("Ninja was liked");
}
function hideBtn(x) {
    x.remove();
}
