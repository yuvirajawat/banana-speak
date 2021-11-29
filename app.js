var btnTranslate = document.querySelector("#btn-translate");
var userText = document.querySelector("#user-text");
var bananaText = document.querySelector("#banana-text");

function clickHandler(){
    // will show translated text
    bananaText.innerText=" translated text: " + userText.value;
}
btnTranslate.addEventListener("click",clickHandler);
