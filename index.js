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
  $(document).on("click tap", "#start-button", function () {
    if (!game_started) {
      $(".start-button").css("visibility", "hidden");
      setTimeout(() => {
        $("#display-score").text(`SCORE: ${score}`);
        $("#display-score").css("visibility", "visible");
      }, 500);
      generate_sequence();
      game_started = true;
    }
  });

  function generate_sequence() {
    // get random number between 0 - 4
    const randomNumber = Math.floor(Math.random() * button_colors.length);
    const randomColor = button_colors[randomNumber];
    computer_sequence.push(randomColor);
    // setout a delay so user can see the order once start is pressed
    setTimeout(() => {
      $(`#${randomColor}`).fadeOut(100).fadeIn(80);
      const computer_color_sound = new Audio(`/sounds/${randomColor}.mp3`);
      computer_color_sound.play();
    }, 500);
  }

  $(".btn").on('click', function(){
    const userChosenColor = this.id
    user_sequence.push(userChosenColor)
    const user_color_sound = new Audio(`/sounds/${userChosenColor}.mp3`)
    user_color_sound.play();
    // console.log(user_sequence);
  });

  function get_user_input() {}
  function check_sequence() {}
});
