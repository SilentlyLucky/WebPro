document.addEventListener("DOMContentLoaded", () => {
  const audio_file = new Audio("Mars_Kota_Bontang.mp3");
  const btn = document.getElementById("mars-toggle-btn");
  const play = document.getElementById("play-icon");
  const pause = document.getElementById("pause-icon");
  const bar = document.querySelector(".progress-bar");
  const fill = document.getElementById("progress-fill");
  const curr = document.getElementById("current-time");
  const total = document.getElementById("total-duration");

  audio_file.autoplay = true;

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  btn.addEventListener("click", () => {
    if (audio_file.muted) {
      audio_file.muted = false;
    }
    if (audio_file.paused) {
      audio_file.play();
    } else {
      audio_file.pause();
    }
  });

  bar.addEventListener("click", (e) => {
    if (!isNaN(audio_file.duration)) {
      const barw = bar.clientWidth;
      const click = e.offsetX;
      audio_file.currentTime = (click / barw) * audio_file.duration;
    }
  });

  audio_file.addEventListener("play", () => {
    play.classList.add("hidden");
    pause.classList.remove("hidden");
  });

  audio_file.addEventListener("pause", () => {
    play.classList.remove("hidden");
    pause.classList.add("hidden");
  });

  audio_file.addEventListener("loadedmetadata", () => {
    total.textContent = formatTime(audio_file.duration);
  });

  audio_file.addEventListener("timeupdate", () => {
    if (audio_file.duration) {
      const progressPercent = (audio_file.currentTime / audio_file.duration) * 100;
      fill.style.width = `${progressPercent}%`;
      curr.textContent = formatTime(audio_file.currentTime);
    }
  });

  audio_file.addEventListener("ended", () => {
    fill.style.width = "0%";
    curr.textContent = "0:00";
  });

});
