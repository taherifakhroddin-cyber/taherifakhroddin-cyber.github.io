// پلیر موزیک – نسخه کامل و تست شده
const playlist = [
    { title: "شادمهر عقیلی – دل دیوونه", src: "music/shadmehr.mp3" }
    // اگه آهنگ دیگه هم گذاشتی همینجا اضافه کن
];

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const nowPlaying = document.getElementById("now-playing");
    const playlistDiv = document.getElementById("playlist");
    const search = document.getElementById("search");

    function loadPlaylist(songs) {
        playlistDiv.innerHTML = "";
        songs.forEach(song => {
            const item = document.createElement("div");
            item.className = "song-item";
            item.textContent = song.title;
            item.onclick = () => {
                audio.src = song.src;
                audio.play();
                nowPlaying.textContent = song.title;
            };
            playlistDiv.appendChild(item);
        });
    }

    search.addEventListener("input", (e) => {
        const term = e.target.value;
        const filtered = playlist.filter(s => s.title.includes(term));
        loadPlaylist(filtered || playlist);
    });

    // اولین بار لیست رو نشون بده
    loadPlaylist(playlist);
});