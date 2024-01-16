$(document).ready(function () {
  const green_btn = $("#green");
  const red_btn = $("#red");
  const blue_btn = $("#blue");
  const yellow_btn = $("#yellow");
  const yellow_sound = new Audio("/sounds/yellow.mp3");
  // const green_sound = new Audio("/sounds/green.mp3");
  const blue_sound = new Audio("/sounds/blue.mp3");
  const red_sound = new Audio("/sounds/red.mp3");


  const computer_sequence = [];
  const user_sequence = [];
  const button_colors = ["green", "red", "yellow", "blue"];
  let game_started = false;
  let game_over = false;
  let score = 0;
  let high_score = 0;

  // -------------- Main game loop -------------- //
  $(document).on("click tap", function () {
    if (!game_started) {
      // $(".start-message").text("Score ");
      // $("#display-score").text(score)
      // generate_sequence();
    }
  });

  // get random number between 0 - 4
  function generate_sequence() {
    const randomNumber = Math.floor(Math.random() * button_colors.length);
    const randomColor = button_colors[randomNumber];
    computer_sequence.push(randomColor);
    if (randomColor === "green") {
      green_btn.fadeOut(100).fadeIn(80);
      // const green_sound = new Audio("/sounds/green.mp3");
      // green_sound.play();
    }
    console.log(computer_sequence);
  }
  // generate_sequence();

  function display_sequence() {}
  function get_user_input() {}
  function check_sequence() {}
});
