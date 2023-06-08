
let userDetails = {};

let button = document.getElementById('myBtn');
button.addEventListener('click', formSubmit);
button.disabled = true;



let userFirstNameInput = document.getElementById('user-first-name');
let userLastNameInput = document.getElementById('user-last-name');
let userEmailInput = document.getElementById('user-email');
let userPwdInput = document.getElementById('user-pwd');
let userPwdCheckInput = document.getElementById('user-pwd-check');

let inputArr = [];
inputArr.push(userFirstNameInput,userLastNameInput,userEmailInput,userPwdInput,userPwdCheckInput)

inputArr.forEach(input =>{
    input.addEventListener('input',()=>{
        validateData(input)
    })
})

let fillStatus = {
    firstName: false,
    lastName: false,
    email: false,
    password: false
}

document.getElementById('form').addEventListener('submit',(event)=>{
    event.preventDefault();

    displayMessage();
})

function displayMessage(){
    console.log(document.getElementsByName('body'))
}

function validateData(input){

    switch(input.id){
        case 'user-first-name':
            if(input.value.match(/^[A-Za-z\s]+$/)){
                document.getElementById('firstName-img').setAttribute('src','success.png');
                fillStatus.firstName = true;
            }else if(input.value == ""){
                document.getElementById('firstName-img').setAttribute('src','empty.png');
                fillStatus.firstName = false;
            }else{
                document.getElementById('firstName-img').setAttribute('src','wrong.png');
                fillStatus.firstName = false;
            }
            break;
        case 'user-last-name':
            if(input.value.match(/^[A-Za-z\s]+$/)){
                document.getElementById('lastName-img').setAttribute('src','success.png');
                fillStatus.lastName = true;
            }else if(input.value == ""){
                document.getElementById('lastName-img').setAttribute('src','empty.png');
                fillStatus.lastName = false;
            }else{
                document.getElementById('lastName-img').setAttribute('src','wrong.png');
                fillStatus.lastName = false;
            }
            break;
        case 'user-email':
            if(input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
                document.getElementById('email-img').setAttribute('src','success.png');
                fillStatus.email = true;
            }else if(input.value == ""){
                document.getElementById('email-img').setAttribute('src','empty.png');
                fillStatus.email = false;
            }else{
                document.getElementById('email-img').setAttribute('src','wrong.png');
                fillStatus.email = false;
            }
            break;
        case 'user-pwd':
            if(input.value == userPwdCheckInput.value){
                document.getElementById('pwd-img').setAttribute('src','success.png');
            }else{
                document.getElementById('pwd-img').setAttribute('src','wrong.png');
            }
            break;
        case 'user-pwd-check':
            if(input.value == userPwdInput.value){
                document.getElementById('pwd-check-img').setAttribute('src','success.png');
                document.getElementById('pwd-img').setAttribute('src','success.png');
                fillStatus.password = true;
            }else{
                document.getElementById('pwd-check-img').setAttribute('src','wrong.png');
                fillStatus.password = false;
            }
            break;
    }

    let eval = formControl()
    if(eval == false){
        button.disabled = true;
        document.getElementById('myBtn').classList.remove('fade-in');
        return;
    }else{
        button.disabled = false;
        document.getElementById('myBtn').classList.add('fade-in');
    }
}
formControl()
function formControl(){
    for(prop of Object.entries(fillStatus)){
        if(prop[1] == true){
            continue;
        }else{
            return false
        }
    }
}

function formSubmit(){
    let form = document.getElementById('form');

    let firstName = form.elements['user-first-name'].value;
    let lastName = form.elements['user-last-name'].value;
    let userEmail = form.elements['user-email'].value;
    let userPwd = form.elements['user-pwd'].value;

    userDetails.firstName = firstName;
    userDetails.lastName = lastName;
    userDetails.userEmail = userEmail;
    userDetails.userPwd = userPwd;

    let jsonObj = JSON.stringify(userDetails)
    console.log(jsonObj)
}