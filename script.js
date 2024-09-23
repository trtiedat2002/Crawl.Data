const musicSelect = document.getElementById('musicSelect');
const audioPlayer = document.getElementById('audioPlayer');

// Change audio source when a new option is selected
musicSelect.onchange = function() {
    audioPlayer.src = this.value;
    audioPlayer.play();
};

// Automatically play "Tình Đầu" on page load
audioPlayer.src = "https://files.catbox.moe/c7fky1.mp3";
audioPlayer.play();

document.getElementById('driveButton').onclick = function() {
    window.location.href = 'https://drive.google.com/drive/folders/1afXMgkbvd44LY9B3VDPokdW_tIWTIqIU?usp=sharing';
};
