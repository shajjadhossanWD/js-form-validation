// js start


    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('number');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');


//addevent

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
})
// more email validate

const isEmail = ( emailVal)=>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol<1)return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot<=atSymbol +3)return false;
    if(dot=== emailVal.length-1)return false;
    return true;

}
// for final result
 const sendData = (usernameVal,sRate,count)=> {
     if(sRate===count){
         alert('registration successful');
         swal("Good job! "+usernameVal, "Registration successful", "success");
        //    location.href = `#?username=${usernameVal}`
    }


 }

const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form_control');
    var count = formCon.length-1;
    for(var i=0; i<formCon.length; i++){
        if(formCon[i].className==="form_control success"){
            var sRate = 0 + i;
          sendData(usernameVal,sRate,count);
        }else{
            return false;
        }
    }
}



// defain the validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = number.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
     
    // validate username

    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <=2){
        setErrorMsg(username, 'username must be 3 cre');
    }else{
        setSuccessMsg(username); 
    }

    //validate email
     
    if(emailVal === " "){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email must be 3 cre');
    }else{
        setSuccessMsg(email); 
    }

     //validate phone
     
     if(phoneVal === ""){
        setErrorMsg(number, 'phone number cannot be blank');
    }else if(phoneVal.length!=11){
        setErrorMsg(number, 'minum 11 crecheter');
    }else{
        setSuccessMsg(number); 
    }

     //validate password
     
     if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }else if(passwordVal<=8){
        setErrorMsg(password, 'minum 8 crecheter');
    }else{
        setSuccessMsg(password); 
    }

     //validate confrim password
     
     if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'password cannot be blank');
    }else if(cpasswordVal!=passwordVal){
        setErrorMsg(cpassword, 'wrong password !');
    }else{
        setSuccessMsg(cpassword); 
    }

    successMsg(usernameVal);
}
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className= "form_control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className= "form_control success";
}

