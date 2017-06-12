$(function() {

  var primitve01Description = "";

 $('.gallery-item').click(function(event) {
    $('.modal-image').css('background-image', 'url("images/items/' + this.id + '.jpg")');
    $('.modal-title').text(this.lastElementChild.lastElementChild.firstElementChild.innerHTML);
    $('.modal-price').text(this.lastElementChild.lastElementChild.lastElementChild.innerHTML);
    $('.modal-description').text(this.lastElementChild.firstElementChild.innerHTML);
    $('#sup-01').css('background-image', 'url("images/items/' + this.id + '-sup-01.jpg")').val(this.id);
    $('#sup-02').css('background-image', 'url("images/items/' + this.id + '-sup-02.jpg")').val(this.id);
    $('#sup-03').css('background-image', 'url("images/items/' + this.id + '-sup-03.jpg")').val(this.id);
    $('#sup-04').css('background-image', 'url("images/items/' + this.id + '-sup-04.jpg")').val(this.id);
    $('.gallery-modal').addClass('modal-activate');
  });

  $('#back').click(function(event) {
    $('.gallery-modal').removeClass('modal-activate');
  });

  $('.suplement').click(function(event) {
    var value1 = $('.suplement').val();
    $('.modal-image').css('background-image', 'url("images/items/' + value1 + '-' + this.id + '.jpg")');
  });

});
