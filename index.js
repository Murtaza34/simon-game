$(document).ready(function () {
  const green_btn = $("#green");
  const red_btn = $("#red");
  const blue_btn = $("#blue");
  const yellow_btn = $("#yellow");

  const sequence = [];
  const user_sequence = [];
  let game_over = false;
  let score = 0;
  let high_score = 0;

  // -------------- Main game loop -------------- //
  $(document).click(function () {});

  // get random number between 1 - 4
  function generate_sequence() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    if (randomNumber === 1) {
      sequence.push("green");
    } else if (randomNumber === 2) {
      sequence.push("red");
    } else if (randomNumber === 3) {
      sequence.push("blue");
    } else if (randomNumber === 4) {
      sequence.push("yellow");
    }
  }
  generate_sequence();

  function display_sequence() {}
  function get_user_input() {}
  function check_sequence() {}
});

/*
Initialize game:
sequence = empty array
user_sequence = empty array
game_over = false

Function generate_sequence(length):
For i from 1 to length:
Add random color to sequence

Function display_sequence():
For each color in sequence:
Display color (light and sound)
Wait for a short period

Function get_user_input():
Wait for user input (button press or mouse click)
Add the pressed color to user_sequence

Function check_sequence():
If user_sequence is not equal to sequence:
Set game_over to true

Main game loop:
While not game_over:
generate_sequence(increase difficulty over time)
display_sequence()
get_user_input()
check_sequence()

Display "Game Over! Your score: {length of sequence - 1}"
*/
