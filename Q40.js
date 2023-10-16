"use strict";
function make_album(artist_name, singer_name, title_name, track) {
    let music_album = {
        artist_name: "Patrick Hyland",
        singer_name: "Mitski",
        title_name: "The Land Is Inhospitable and So Are We",
        track: 10,
    };
    return music_album;
}
;
let album1 = make_album("Artist1", "Shivkumar Sharma", "Music of the Mountains", 10);
let album2 = make_album("Artist2", "Singer2", "Title2");
let album3 = make_album("Artist3", "Singer3", "Title3");
console.log(album1);
console.log(album2);
console.log(album3);
