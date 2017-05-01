$(function() {

// if (typeof google === 'object' && typeof google.maps === 'object') {
//         myMap();
//     } else {
//         var script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCclpY08qe8sctwyeXiMnSeYFjDKITLnSQ&callback=myMap";
//         document.body.appendChild(script);
//     }

myMap();

  var mapOptions;
  var map;
  var marker;


  function myMap() {
    mapOptions = {
        center: new google.maps.LatLng(42.784743, -88.414086),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    marker = new google.maps.Marker({position: new google.maps.LatLng(42.784743, -88.414086)});

    marker.setMap(map);
  };

  $('#directions').click(function(event) {
    window.open("https://www.google.com/maps/place/3066+Main+St,+East+Troy,+WI+53120/@42.7847429,-88.4162751,17z/data=!3m1!4b1!4m5!3m4!1s0x88059411d6629855:0x54cb884f262ca51b!8m2!3d42.7847429!4d-88.4140864", "_blank")
  });

  $('.item').click(function(event) {
    $('.gallery-modal').addClass('modal-activate');
  });

  $('#back').click(function(event) {
    $('.gallery-modal').removeClass('modal-activate');
  });

  $('#email').click(function(event) {
    window.open("mailto:goodsantiqueswisconsin@gmail.com?subject=After visiting your website...", "_blank");
  });

  $('#facebook').click(function(event) {
    window.open("https://www.facebook.com/goodsantiques", "_blank");
  });

  $('#instagram').click(function(event) {
    window.open("https://www.instagram.com/goodsantiques", "_blank");
  });

});
