/*
FILE NAME: form_validering.js
WRITTEN BY: Catriona Tørklep
WHEN: november 2016
PURPOSE: Validerer input i svarskjema
*/

// Checks that the name doesn't contains special characters
function validateName(){
    var re = /^(?=.*[a-zA-Z])([A-z\s-æøåÆØÅ]+)$/;
    var name = document.getElementById('name');

  if(re.test(name.value)){
    name.style.background='#E6F0C9';
    document.getElementById('nameError').style.display = "none";
    return true;
  } else {
    name.style.background='#F9E7E4';
    document.getElementById('nameError').style.display = "block";
    return false;
  }
}

// Checks that the phone number only contains numbers, +
function validatePhone(){
  var re = /^(?=.*[0-9])([0-9+\s]+)$/;
  var phone = document.getElementById('phone');

  if(re.test(phone.value)){
    phone.style.background='#E6F0C9';
    document.getElementById('phoneError').style.display = "none";
    return true;
  } else {
    phone.style.background='#F9E7E4';
    document.getElementById('phoneError').style.display = "block";
    return false;
  }
}

function validateEmail(){
  var re = /^[\w.!#$%&'*+-/=?^`{|}~]+@[a-zA-Z0-9-]+?\.[a-zA-Z]{2,3}$/;
  var email = document.getElementById('email');

  if(re.test(email.value)){
    email.style.background ='#E6F0C9';
    document.getElementById('emailError').style.display = "none";
    return true;
  } else {
    email.style.background ='#F9E7E4';
    document.getElementById('emailError').style.display = "block";
    return false;
  }
}

function validateRadio(){
    var wedJa = document.getElementById('wedJa');
    var wedNei = document.getElementById('wedNei');
    var parJa = document.getElementById('parJa');
    var parNei = document.getElementById('parNei');

    if((wedJa.checked || wedNei.checked) && (parJa.checked || parNei.checked)){
        document.getElementById('radioError').style.display = "none";
        return true;
    } else {
        document.getElementById('radioError').style.display = "block";
        return false;
    }
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateRadio()){
        document.getElementById('submitError').style.display = "block";
        return false;
    } else {
        document.getElementById('submitError').style.display = "none";
        return true;
    }
}
