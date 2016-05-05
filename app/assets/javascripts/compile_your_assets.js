$(document).on('ready', function(){

  $('body').append('<span data-line-number="3. ">Compile your assets,</span><br>');

  $('#hidden').hide();

  $("#rick").on("click", function(){
    $("#rick").fadeOut("slow")
    $('#vid').append('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    $('body').css( "background-color", "thistle" );
  });
});
