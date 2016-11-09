function validateName(name){
  var re = /[A-Za-z -']/;

  console.log(document.getElementById(name).value);
  if(re.test(document.getElementById(name).value)){
    document.getElementById(name).style.background='#ccffcc';
    document.getElementById('nameError').style.display = "none";
    return true;
  }
  else {
    document.getElementById(name).style.background='#e35152';
    document.getElementById('nameError').style.display = "block";
    return false;
  }
}

function validatePhone(phone){
  var re = /[A-Za-z -']/;
  console.log(document.getElementById(phone));
  if(re.test(document.getElementById(phone).value)){
    document.getElementById(phone).style.background='#ccffcc';
    document.getElementById('phoneError').style.display = "none";
    return true;
  }
  else {
    document.getElementById(phone).style.background='#e35152';
    document.getElementById('phoneError').style.display = "block";
    return false;
  }
}

function validateEmail(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)){
    document.getElementById('email').style.background ='#ccffcc';
    document.getElementById('emailError').style.display = "none";
    return true;
  }
  else {
    document.getElementById('email').style.background ='#e35152';
    return false;
  }
}

function validateRadio(x){
  if(document.getElementsByName(x).checked){
    return true;
  }
  else {
    return false;
  }
}

function validateForm(){
  var error = 0;
  if(!validateName('name')){
    document.getElementById('nameError').style.display = "block";
    error++;
  }

  if(!validatePhone(document.getElementById('phone').value)){
    document.getElementById('phoneError').style.display = "block";
    error++;
  }

  if(!validateEmail(document.getElementById('email').value)){
    document.getElementById('emailError').style.display = "block";
    error++;
  }

  if(validateRadio('wedJa')){
  }
  else if(validateRadio('wedNei')){
  }
  else{
    document.getElementById('weddingError').style.display = "block";
    error++;
  }

  if(validateRadio('parJa')){
  }
  else if(validateRadio('parNei')){
  }
  else{
    document.getElementById('partyError').style.display = "block";
    error++;
  }


  if(error > 0){
    return false;
  }
}




/*function validateForm() {
    var navn = document.forms["rsvpForm"]["name"].value;
    var telefon = document.forms["rsvpForm"]["phone"].value;
    var epost = document.forms["rsvpForm"]["email"].value;
    var gjester = document.forms["rsvpForm"]["guests"].value;

    if (navn != null || navn != "") && (telefon != null || telefon != "") && (epost != null || epost != ""){
      document.getElementById("feil").innerHTML = ''
  }
}
*/

/*

function validateForm() {
    var navn = document.forms["rsvpForm"]["name"].value;
    var telefon = document.forms["rsvpForm"]["phone"].value;
    var epost = document.forms["rsvpForm"]["email"].value;
    var gjester = document.forms["rsvpForm"]["guests"].value;

    if (navn == null || navn == "") {
        document.getElementById("feil").innerHTML = '* Vennligst skriv inn ditt navn.';
        return false;
    }

    if (telefon == null || telefon == "") {
        document.getElementById("feil").innerHTML = '* Vennligst skriv inn ditt telefonnummer.';
        return false;
    }

    if (epost == null || epost == "") {
        document.getElementById("feil").innerHTML = '* Vennligst skriv inn din e-post.';
        return false;
    }

}

*/

/*
function validateForm(this) {

var navn = document.forms["rsvpForm"][this];

    if (navn.value == null || navn.value == "") {
        document.getElementById("feil").innerHTML = '* Vennligst fyll inn alle feltene.';
        return false;
    }
}
*/
