$(function() {

 $('.item').click(function(event) {
    $('.modal-image').css('background-image', 'url("images/items/' + this.id + '.jpg")');
    $('.gallery-modal').addClass('modal-activate');
  });

  $('#back').click(function(event) {
    $('.gallery-modal').removeClass('modal-activate');
  });

});
