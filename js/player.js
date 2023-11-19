// var player = document.getElementById("player");
// let progress = document.getElementById("progress");
// let playbtn = document.getElementById("playbtn");

// var playpause = function () {
//   if (player.paused) {
//     player.play();
//   } else {
//     player.pause();
//   }
// }

// playbtn.addEventListener("click", playpause);

// player.onplay = function () {
//   playbtn.classList.remove("fa-play");
//   playbtn.classList.add("fa-pause");
// }

// player.onpause = function () {
//   playbtn.classList.add("fa-play");
//   playbtn.classList.remove("fa-pause");
// }

// player.ontimeupdate = function () {
//   let ct = player.currentTime;
//   current.innerHTML = timeFormat(ct);
//   //progress
//   let duration = player.duration;
//   prog = Math.floor((ct * 100) / duration);
//   progress.style.setProperty("--progress", prog + "%");
// }

// function timeFormat(ct) {
//   minutes = Math.floor(ct / 60);
//   seconds = Math.floor(ct % 60);

//   if (seconds < 10) {
//     seconds = "0"+seconds;
//   }

//   return minutes + ":" + seconds;
// }






// Get all audio player elements with the class name "audio-player"
var audioPlayers = document.querySelectorAll(".audio-player");

audioPlayers.forEach(function (playerElement, index) {
  // Get elements within the current audio player element
  var player = playerElement.querySelector("audio");
  var progress = playerElement.querySelector(".audio-progress");
  var playbtn = playerElement.querySelector(".audio-playbtn");
  var current = playerElement.querySelector(".current");

  // Add event listener for play/pause button click
  playbtn.addEventListener("click", function () {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  });

  // Event handler for when the audio starts playing
  player.onplay = function () {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
  };

  // Event handler for when the audio is paused
  player.onpause = function () {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
  };

  // Event handler for updating the progress
  player.ontimeupdate = function () {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);

    // Calculate and update progress
    let duration = player.duration;
    prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + "%");
  };

  // Function to format time in minutes:seconds
  function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  }
});