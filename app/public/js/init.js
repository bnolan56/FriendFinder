// initializes materialize modal

(function($){
  $(function(){
    $('select').formSelect();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('input#input_text, textarea#textarea1').characterCounter();
  }); // end of document ready
})(jQuery); // end of jQuery name space
