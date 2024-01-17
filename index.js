$(document).ready(function () {
  const computer_sequence = [];
  let user_sequence = [];
  const button_colors = ["green", "red", "yellow", "blue"];
  let game_started = false;
  let game_over = false;
  let level = 0;
  let high_score = 0;

  // -------------- Main game loop -------------- //
  $(document).on("click tap", "#start-button", function () {
    if (!game_started) {
      $(".start-button").css("visibility", "hidden");
      setTimeout(() => {
        $("#display-score").css("visibility", "visible");
      }, 300);
      generate_sequence();
      get_user_input();
      game_started = true;
    }
  });

  function generate_sequence() {
    user_sequence = [];
    level++;
    $("#display-score").text(`LEVEL ${level}`);

    // get random number between 0 - 4
    const randomNumber = Math.floor(Math.random() * button_colors.length);
    const randomColor = button_colors[randomNumber];
    computer_sequence.push(randomColor);
    // setout a delay so user can see the order once start is pressed
    setTimeout(() => {
      $(`#${randomColor}`).fadeOut(100).fadeIn(80);
      play_Sound(randomColor);
    }, 500);
    // console.log(computer_sequence);
  }

  // users sequence order
  function get_user_input() {
    $(".btn").on("click", function () {
      const userChosenColor = this.id;
      user_sequence.push(userChosenColor);
      play_Sound(userChosenColor);
      // console.log(user_sequence);
      check_sequence(user_sequence.length - 1);
    });
  }

  function play_Sound(color) {
    const game_sound = new Audio(`/sounds/${color}.mp3`);
    game_sound.play();
  }
  // checks both computer and user sequence
  function check_sequence(currentColor) {
    if (user_sequence[currentColor] === computer_sequence[currentColor]) {
      if (user_sequence.length === computer_sequence.length) {
        setTimeout(() => {
          generate_sequence();
        }, 500);
      }
    }
  }
});
