//Google Maps code from Google: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key for adding Google Maps to your site

//Vielse
function vielseMap() {
  var lommedal = {lat: 59.950574, lng: 10.501232}; //Område som skal vises
  var map = new google.maps.Map(document.getElementById('mapVielse'), { //I funksjonen google.maps.Map kan man legge til funksjoner som zoom og hvor kartet skal være sentrert.
    zoom: 17, //111.fikse zoom, Zooming på kartet
    center: lommedal //Hvor kartet skal sentreres, her i posisjon lommedal (satt i longitude og latitude)
  });
  var marker = new google.maps.Marker({ //Posisjonen til markøren
    position: lommedal,
    map: map
  });
};

//Bryllupsfest
function bryllupsMap() {
  var bennaveien = {lat: 63.201668, lng: 10.249456};
  var map = new google.maps.Map(document.getElementById('mapFest'), {
    zoom: 17, //111.fikse zoom
    center: bennaveien
  });
  var marker = new google.maps.Marker({
    position: bennaveien,
    map: map
  });
};
