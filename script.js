// پلیر موزیک – نسخه ۱۰۰٪ کارکرده (کپی کن دقیقاً همین!)
const playlist = [
    { title: "شادمهر_دل دیوونه", src: "music1.mp3" }
];

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const nowPlaying = document.getElementById("now-playing");
    const playlistDiv = document.getElementById("playlist");

    // ساخت لیست آهنگ‌ها
    playlist.forEach(song => {
        const div = document.createElement("div");
        div.className = "song-item";
        div.textContent = song.title + " ▶️";
        div.onclick = () => {
            audio.src = song.src;
            audio.play();
            nowPlaying.textContent = song.title;
        };
        playlistDiv.appendChild(div);
    });

    // اولین آهنگ رو خودکار لود کن
    if (playlist.length > 0) {
        audio.src = playlist[0].src;
        nowPlaying.textContent = playlist[0].title;
    }
});
const playlist = [
    { title: "شادمهر – دل دیوونه", src: "music/test.mp3" }
];