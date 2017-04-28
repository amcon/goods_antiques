$(function() {

  console.log('Its lit');

  function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(42.784743, -88.414086),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({position: new google.maps.LatLng(42.784743, -88.414086)});

    marker.setMap(map);
  };


  $('#directions').click(function(event) {
    window.open("https://www.google.com/maps/place/3066+Main+St,+East+Troy,+WI+53120/@42.7847429,-88.4162751,17z/data=!3m1!4b1!4m5!3m4!1s0x88059411d6629855:0x54cb884f262ca51b!8m2!3d42.7847429!4d-88.4140864", "_blank")
  });


  myMap();

});
