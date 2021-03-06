var btnTranslate = document.querySelector("#btn-translate");
var userText = document.querySelector("#user-text");
var bananaText = document.querySelector("#banana-text");
const serverURL="https://api.funtranslations.com/translate/minion.json";
//construct the actual url to query
function getTranslationURL(inputText){
    return serverURL+"?"+"text="+inputText;
}
//handle exceptions
function errorHandler(error){
    console.log("error occured!", error);
    alert("something wrong on the server side! please try again after some time.");
}
function clickHandler(){
    // will show translated text
    fetch(getTranslationURL(userText.value)).then(response=>response.json())
    .then(json => {
        bananaText.innerText=json.contents.translated;
    })
    .catch(errorHandler);
}
// click handler
btnTranslate.addEventListener("click",clickHandler);
