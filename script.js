const inpName = document.querySelector("#name");
const inpPassword = document.querySelector("#password");
const form = document.querySelector("#form");
const toasts = document.querySelector(".toasts");

form.addEventListener("submit", (e) => {
    let nameVal = inpName.value;
    let passwordVal = inpPassword.value;
    checkValidation(nameVal,passwordVal);

    e.preventDefault();
})

function checkValidation(valName,valPassword){
    let nameValid;
    let passwordValid;

    if(valName.length < 3){
        showMessage("Name required at least 3 characters.");
    }else if(valName.length >= 11){
        showMessage("Name required at most 10 characters.");
    }else{
        nameValid = true;
    }

    if(valPassword.length < 3){
        showMessage("Password required at least 3 characters.");
    }else if(valPassword.length >= 11){
        showMessage("Password required at most 10 characters.");
    }else{
        passwordValid = true;
    }

    if(nameValid && passwordValid){
        showMessage("Successfully submitted.");
    }
}

function showMessage(message,clr){
    let div = document.createElement("div");
    div.classList.add("toast");
    div.innerHTML = message;

    setTimeout(() => {div.classList.add("disappear")},500);
    setTimeout(() => {div.remove()},1000);
    
    toasts.appendChild(div);
}