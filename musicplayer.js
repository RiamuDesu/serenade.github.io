const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "Pause";
  } else {
    audio.pause();
    playBtn.innerText = "Play";
  }
}

function skipTime(seconds) {
  audio.currentTime += seconds;
}

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress || 0;

  currentTimeEl.innerText = formatTime(audio.currentTime);
});

progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

function setDuration() {
    if (audio.duration) {
        durationEl.innerText = formatTime(audio.duration);
    }
}

audio.addEventListener('loadedmetadata', setDuration);

if (audio.readyState >= 1) {
    setDuration();
}



const memories = {
    1: {
        title: "Blue - Yung Kai",
        audio: "music/Blue - Yung Kai.mp3",
        image: "img2.jpg",
        letter: "<h2>My Love,</h2><br><br>They say home is a place, but for me, it’s always been you. No matter where we are or what we’re doing, there is a quiet peace that settles over me the moment you’re near.<br><br>I love the way your laughter can turn my entire day around and how just a look from you makes me feel completely understood. Thank you for being my teammate, my comfort, and my greatest adventure.<br><br>You are, and will always be, the best part of my day.<br><br>Forever yours."
    },
    2: {
        title: "Lover - Taylor Swift",
        audio: "music/Blue - Yung Kai.mp3",
        image: "img2.jpg",
        letter: "<h2>My Love,</h2><br><br>They say home is a place, but for me, it’s always been you. No matter where we are or what we’re doing, there is a quiet peace that settles over me the moment you’re near.<br><br>I love the way your laughter can turn my entire day around and how just a look from you makes me feel completely understood. Thank you for being my teammate, my comfort, and my greatest adventure.<br><br>You are, and will always be, the best part of my day.<br><br>Forever yours."
    },
    3: {
        title: "Blue - Yung Kai",
        audio: "music/Blue - Yung Kai.mp3",
        image: "img2.jpg",
        letter: "<h2>My Love,</h2><br><br>They say home is a place, but for me, it’s always been you. No matter where we are or what we’re doing, there is a quiet peace that settles over me the moment you’re near.<br><br>I love the way your laughter can turn my entire day around and how just a look from you makes me feel completely understood. Thank you for being my teammate, my comfort, and my greatest adventure.<br><br>You are, and will always be, the best part of my day.<br><br>Forever yours."
    },
    4: {
        title: "Blue - Yung Kai",
        audio: "music/Blue - Yung Kai.mp3",
        image: "img2.jpg",
        letter: "<h2>My Love,</h2><br><br>They say home is a place, but for me, it’s always been you. No matter where we are or what we’re doing, there is a quiet peace that settles over me the moment you’re near.<br><br>I love the way your laughter can turn my entire day around and how just a look from you makes me feel completely understood. Thank you for being my teammate, my comfort, and my greatest adventure.<br><br>You are, and will always be, the best part of my day.<br><br>Forever yours."
    }
};
function loadMemory(id) {
    const data = memories[id];
    if (!data) return;
    const card = document.querySelector('.card');
    card.classList.add('fade-out');

    setTimeout(() => {
        document.getElementById('song-title').innerText = data.title;
        
        const audio = document.getElementById('audio-element');
        audio.src = data.audio;
        audio.load();
        
        // Update Iframe Letter
        const frame = document.getElementById('letterFrame');
        updateIframeContent(frame, data.letter);

        // 3. Fade back in and Play
        card.classList.remove('fade-out');
        card.classList.add('fade-in');
        
        // Only play if it was already playing or user clicked
        audio.play().catch(e => console.log("Autoplay blocked, waiting for user."));
    }, 300);
}

function updateIframeContent(frame, text) {
    const html = `<html><head><style>
        body {
          font-family: "Georgia", serif;
          line-height: 1.5;
          color: #4a4a4a;
          background-color: #fffafb;
          padding: 30px;
          margin: 0;
          font-size:20px;
        }
        .letter-content {
          white-space: pre-line;
        }
        h2 {
          color: #d63384; font-size: 1.5rem; margin-top: 0; 
        }
    </style></head><body>${text.replace(/\n/g, '<br>')}</body></html>`;
    frame.srcdoc = html;
}