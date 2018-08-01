// Select a button and add an eventlistener & callback function
var btnJumboOntdek = document.getElementById("btnJumboOntdek");
var btnJumboSluit = document.getElementById("btnJumboSluit");

var jumboTronStart = document.getElementById("jumboTronStart");
var jumboTronMap = document.getElementById("jumboTronMap");

var jumboTronButtonToggle = false;

btnJumboOntdek.addEventListener("click", switchJumboTron);
btnJumboSluit.addEventListener("click", switchJumboTron);


jumboTronStart.style.display = "block";
jumboTronMap.style.display = "none";

function switchJumboTron() {
    if (jumboTronButtonToggle) {
        jumboTronStart.style.display = "block";
        jumboTronMap.style.display = "none";
        jumboTronButtonToggle = false;

        console.log("jumtoTronButtonclicked = " + jumboTronButtonToggle);
        console.log(".");

    } else {
        jumboTronStart.style.display = "none";
        jumboTronMap.style.display = "block";
        jumboTronButtonToggle = true;

        console.log("jumtoTronButtonclicked = " + jumboTronButtonToggle);
        console.log(".");
    }
}

function logClickEventJumboTronButton() {
    console.log("Jumbotron button has been clicked");
}