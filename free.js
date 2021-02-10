let menuList = document.getElementById("menuWrapper");

let btn = document.getElementById("toggleBtn");

btn.onclick = function() {
    menuList.style.display = "block";

}

let btnClose = document.getElementById("btnClose");

btnClose.onclick = function() {
    menuList.style.display = "none";
}