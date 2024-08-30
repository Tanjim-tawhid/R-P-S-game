let rock_btn = document.getElementById("rock");
let Papper_btn = document.getElementById("papper");
let scissor_btn = document.getElementById("scissor");
let computer_action = document.getElementById("computer-action");
let player_action = document.getElementById("player-action");
let again_btn = document.getElementById("again-btn");
let random_number = Math.round(Math.random() * 2);
let choice_sect = document.getElementById("choice");
let actions = document.getElementById("action");
let message = document.getElementById("message");
let player_desition;
let computer_value = 0;
let player_value = 0;
let success_sound = document.getElementById('success');
let lost_sound = document.getElementById('lost');
let draw_sound = document.getElementById('draw');

// Events




// For Rock
rock_btn.addEventListener("click", (e) => {
  player_desition = 0;
  console.log(random_number);
  if (random_number === player_desition) {
    draw_sound.play();
    again_btn.style.visibility = "visible";
    again_btn.innerHTML = "Play Again";
    message.style.visibility = "visible";
    message.innerHTML = "Draw";
    choice_sect.style.visibility = "hidden";
    computer_action.style.visibility = "visible";
    player_action.style.visibility = "visible";
    player_action.setAttribute("src", "stone.png");
    computer_action.setAttribute("src", "stone.png");
    player_action.style.width = "60%";
    again_btn.style.marginLeft = "20%";
    again_btn.style.backgroundColor = "skublue";
    draw_sound.play();
  } else {
    player_action.setAttribute("src", "stone.png");
    player_action.style.visibility = "visible";
    player_action.style.width = "60%";
    choice_sect.style.visibility = "hidden";
    if (random_number === 1) {
      lost_sound.play();
      computer_action.setAttribute("src", "Papper.png");
      computer_action.style.visibility = "visible";
      again_btn.style.visibility = "visible";
      again_btn.style.marginLeft = "20%";
      message.style.visibility = "visible";
      message.innerHTML = "You Lost";
    }
    if (random_number === 2) {
      success_sound.play();
      computer_action.setAttribute("src", "Scissors.png");
      computer_action.style.visibility = "visible";
      again_btn.style.visibility = "visible";
      again_btn.style.marginLeft = "20%";
      again_btn.innerHTML = "Play Again";
      message.style.visibility = "visible";
      message.innerHTML = "You WIN";
    }
  }
});





//For Papper
Papper_btn.addEventListener("click", (e) => {
  player_desition = 1; // Paper is represented by 1
  console.log(random_number);

  // Show the player's action (Paper)
  player_action.setAttribute("src", "Papper.png");
  player_action.style.visibility = "visible";
  player_action.style.width = "60%";
  choice_sect.style.visibility = "hidden";

  // Determine the computer's action and display the result
  if (random_number === player_desition) {
    draw_sound.play();
    computer_action.setAttribute("src", "Papper.png");
    message.innerHTML = "Draw";
  } else if (random_number === 0) {
    success_sound.play();
    computer_action.setAttribute("src", "stone.png");
    message.innerHTML = "You WIN";
  } else if (random_number === 2) {
    lost_sound.play();
    computer_action.setAttribute("src", "Scissors.png");
    message.innerHTML = "You Lost";
  }

  // Show the computer's action
  computer_action.style.visibility = "visible";

  // Show the "Play Again" button and set styles
  again_btn.style.visibility = "visible";
  again_btn.style.marginLeft = "20%";
  again_btn.innerHTML = "Play Again";
  message.style.visibility = "visible";
});




///For scissor
scissor_btn.addEventListener("click", (e) => {
  player_desition = 2;
  console.log(random_number);
  if (random_number === player_desition) {
    draw_sound.play();
    again_btn.style.visibility = "visible";
    again_btn.innerHTML = "Play Again";
    message.style.visibility = "visible";
    message.innerHTML = "Draw";
    choice_sect.style.visibility = "hidden";
    computer_action.style.visibility = "visible";
    player_action.style.visibility = "visible";
    player_action.setAttribute("src", "Scissors.png");
    computer_action.setAttribute("src", "Scissors.png");
    player_action.style.width = "60%";
    again_btn.style.marginLeft = "20%";
    again_btn.style.backgroundColor = "skublue";
    draw_sound.play();
  } else {
    player_action.setAttribute("src", "Scissors.png");
    player_action.style.visibility = "visible";
    player_action.style.width = "60%";
    choice_sect.style.visibility = "hidden";
    if (random_number === 0) {
      lost_sound.play();
      computer_action.setAttribute("src", "stone.png");
      computer_action.style.visibility = "visible";
      again_btn.style.visibility = "visible";
      again_btn.style.marginLeft = "20%";
      message.style.visibility = "visible";
      message.innerHTML = "You Lost";
    }
    if (random_number === 1) {
      success_sound.play();
      computer_action.setAttribute("src", "Papper.png");
      computer_action.style.visibility = "visible";
      again_btn.style.visibility = "visible";
      again_btn.style.marginLeft = "20%";
      again_btn.innerHTML= 'Play Again'
      message.style.visibility = "visible";
      message.innerHTML = "You WIN";
    }
  }
});





///For again btn

again_btn.addEventListener("click", () => {
  location.reload(); // Reloads the current page
});
