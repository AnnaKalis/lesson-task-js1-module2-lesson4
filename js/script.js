const pageButton = document.querySelector("button");
const counterContainer = document.querySelector(".counter");
const inputContainer = document.querySelector(".inputs");

pageButton.addEventListener ("mousedown", counterOnPress);
pageButton.addEventListener ("mouseup", counterStop);


let intervalId;
let count;

function counterOnPress() {
  count = 0;
  intervalId = setInterval(function () {
    count++;
    pageButton.innerText = "Release to stop counter"
    counterContainer.innerText = count;
    inputContainer.innerHTML = "";
  }, 1000);
 
}

function counterStop () {
    clearInterval(intervalId);
    for (let i = 1; i<=count; i++) {
        inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`
    }
    
}




