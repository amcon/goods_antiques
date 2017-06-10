$(function() {

 $('.item').click(function(event) {
    $('.modal-image').css('background-image', 'url("images/items/' + this.id + '.jpg")');
    $('#sup-01').css('background-image', 'url("images/items/' + this.id + '-sup-01.jpg")').val(this.id);
    $('#sup-02').css('background-image', 'url("images/items/' + this.id + '-sup-02.jpg")').val(this.id);
    $('#sup-03').css('background-image', 'url("images/items/' + this.id + '-sup-03.jpg")').val(this.id);
    $('#sup-04').css('background-image', 'url("images/items/' + this.id + '-sup-04.jpg")').val(this.id);
    $('.gallery-modal').addClass('modal-activate');
  });

  $('#back').click(function(event) {
    $('.gallery-modal').removeClass('modal-activate');
  });

  $('#sup-01').click(function(event) {
    var value1 = $('#sup-01').val();
    $('.modal-image').css('background-image', 'url("images/items/' + value1 + '-sup-01.jpg")');
  });

  $('#sup-02').click(function(event) {
    var value2 = $('#sup-02').val();
    $('.modal-image').css('background-image', 'url("images/items/' + value2 + '-sup-02.jpg")');
  });

  $('#sup-03').click(function(event) {
    var value3 = $('#sup-03').val();
    $('.modal-image').css('background-image', 'url("images/items/' + value3 + '-sup-03.jpg")');
  });

  $('#sup-04').click(function(event) {
    var value4 = $('#sup-04').val();
    $('.modal-image').css('background-image', 'url("images/items/' + value4 + '-sup-04.jpg")');
  });

});
