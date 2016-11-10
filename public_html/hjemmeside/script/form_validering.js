function validateName(){
    var re = /[A-z-\søæåØÆÅ]+/;
    var name = document.getElementById('name');
    
  if(re.test(name.value)){
    name.style.background='#ccffcc';
    return true;
  } else {
    name.style.background='#e35152';
    document.getElementById('nameError').style.display = "block";
    return false;
  }
}

function validatePhone(){
  var re = /[0-9+\s]+/;
  var phone = document.getElementById('phone');
    
  if(re.test(phone.value)){
    phone.style.background='#ccffcc';
    return true;
  } else {
    phone.style.background='#e35152';
    document.getElementById('phoneError').style.display = "block";
    return false;
  }
}

function validateEmail(){
  var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email = document.getElementById('email');
    
  if(re.test(email.value)){
    email.style.background ='#ccffcc';
    return true;
  } else {
    email.style.background ='#e35152';
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
        return true;
    }
}