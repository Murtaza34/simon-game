$(document).ready(function () {
  let game_started = false;
  let computer_sequence = [];
  let user_sequence = [];
  const button_colors = ["green", "red", "yellow", "blue"];
  let level = 0;

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
    // console.log(`Computer Seq: ${computer_sequence}`);
  }

  // users sequence order
  function get_user_input() {
    $(".btn").on("click tap", function () {
      const userChosenColor = this.id;
      user_sequence.push(userChosenColor);
      play_Sound(userChosenColor);
      // console.log(`User Seq: ${user_sequence}`);
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
    } else {
      play_Sound("wrong");
      $("body").css("background", "red");
      setTimeout(() => {
        $("body").css("background", "#e2e267");
      }, 300);
      $(".display-score").css("visibility", "hidden");
      $(".start-button").css("visibility", "visible");
      startOver();
    }
  }

  function startOver() {
    level = 0;
    computer_sequence = [];
    user_sequence = [];
    game_started = false;
  }
});
