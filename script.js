console.log('Welcome to you in my Clone of spotify')
let songIndex = 0;
let audioElement = new Audio('html_css\spotify\songs\x01.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songs = [

    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tujhko-na-dekhu-to", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
]
//audioElement.play()

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
})
