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


/*

Ingen av disse kodene fungerer. Skal stoppe formen fra å bli sendt og gi feilmelding dersom ingen radio buttons er checked.
Disse baserer seg på at <form> har et element inni taggen som heter onsubmit="return radioValidate()"

------------------- KODE 1 ------------------------

function radioValidate() {

  var bryllup = document.getElementsByName("wedding")
  var fest = document.getElementsByName("party")
  var b = -1
  var f = -1

  for(var i=0; i < bryllup.length; i++){
   if(bryllup[i].checked) {
      b = i;
    }
  }

  for(var i=0; i < fest.length; i++){
   if(fest[i].checked) {
      f = i;
    }
  }

  if (c == -1) {
    document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("feil").innerHTML = '* Vennligst kryss av ja eller nei på "Vielsen".';
  }

  if (f == -1) {
    document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("feil").innerHTML = '* Vennligst kryss av ja eller nei på "Bryllupsfesten".';
  }


------------------- KODE 2 ------------------------

  function radioValidate() {

  var bryllup = document.forms["rsvpForm"]["wedding"].checked;
  var fest = document.forms["rsvpForm"]["party"].checked;

  if ( (bryllup[0] == false) && (bryllup[1] == false) ) {
    document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('feil').innerHTML = '* Vennligst kryss av ja eller nei.';
    return false;
  }

  if ( (fest[0] == false) && (fest[1] == false) ) {
    document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('feil').innerHTML = '* Vennligst kryss av ja eller nei.';
    return false;
  }
}

*/
