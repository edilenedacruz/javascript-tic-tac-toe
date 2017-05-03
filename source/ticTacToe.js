$(document).ready(function(){
  var turn = "X"
  $('td').click(function(event){
    $(event.target).text(turn);
      if (turn == "X") {
        turn = "O"
      } else {
        turn = "X"
      }
  })
});
