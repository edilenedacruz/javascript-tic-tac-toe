$(document).ready(function(){
  var turn = "X"
  $('td').click(function(event){
    $(event.target).text(turn);
    $(event.target).addClass(turn);
      if (turn == "X") {
        turn = "O"
      } else {
        turn = "X"
      }
      //check board for winning combination
  var board = [" ", " ", " ", " ", " ", " ", " "];


      // if(checkWin()) {
      //   alert(turn + 'wins!')
      // }
      //
      // function checkWin(){
      //
      // }
  // })
  })
})
