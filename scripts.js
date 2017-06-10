$(function() {

  console.log('Its lit');


  $('#directions').click(function(event) {
    window.open("https://www.google.com/maps/place/3066+Main+St,+East+Troy,+WI+53120/@42.7847429,-88.4162751,17z/data=!3m1!4b1!4m5!3m4!1s0x88059411d6629855:0x54cb884f262ca51b!8m2!3d42.7847429!4d-88.4140864", "_blank")
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
