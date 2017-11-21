$(function() {

  console.log('Its lit');

  var homeImgArr = ["url('images/home-page.jpg')", "url('images/about-page.jpg')", "url('images/map-page.jpg')"];

  function changePic() {
    setTimeout(function() {
      $(".home-page").css('background-image', homeImgArr[0]);
    }, 0);
    setTimeout(function() {
      $(".home-page").css('background-image', homeImgArr[1]);
    }, 5000);
    setTimeout(function() {
      $(".home-page").css('background-image', homeImgArr[2]);
    }, 10000);
  }

  setInterval(function() {
    console.log("i ran");
    changePic();
  }, 15000);

  setTimeout(function() {
    $(".home-page").css('background-image', homeImgArr[1]);
  }, 5000);
  setTimeout(function() {
    $(".home-page").css('background-image', homeImgArr[2]);
  }, 10000);
  setTimeout(function() {
    $(".home-page").css('background-image', homeImgArr[0]);
  }, 15000);



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
