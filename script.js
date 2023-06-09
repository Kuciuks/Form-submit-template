
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
    setInterval(() => {
        location.reload();
    }, 3000);
})



function displayMessage(){
    
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = 'calc(50% - 350px / 2)'
    div.style.top = 'calc(50% - 115px / 2)'
    div.style.width = '350px';
    div.style.height = '115px';
    div.style.backgroundColor = 'var(--primary)'
    div.style.border = '2px solid black';
    div.style.boxShadow = '0 0 25px rgb(25,200,111) inset'
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center'
    div.setAttribute('class','popOut')


    let h1 = document.createElement('p');
    h1.innerText = 'Congratulations!!! \nYou won the jackpot!!!'
    h1.style.textAlign = 'center'
    h1.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
    h1.style.fontSize = '30px'
    h1.style.color = 'var(--secondary)'
    h1.style.margin = '0px'
    
    div.appendChild(h1)
    document.getElementById('form').appendChild(div)
}

function validateData(input){

    switch(input.id){
        case 'user-first-name':
            if(input.value.match(/^[A-Za-z\s]+$/)){
                document.getElementById('firstName-img').setAttribute('src','success.png');
                fillStatus.firstName = true;
            }else if(input.value == ''){
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
            }else if(input.value == ''){
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
            }else if(input.value == ''){
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