//Vielse
function vielseMap() {
  var lommedal = {lat: 59.950574, lng: 10.501232};
  var map = new google.maps.Map(document.getElementById('mapVielse'), {
    zoom: 17, //111.fikse zoom
    center: lommedal
  });
  var marker = new google.maps.Marker({
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
