// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
interface album {
    artist_name : string,
    singer_name :string,
    title_name: string,
    track?:number
}

function make_album(artist_name:string,singer_name:string,title_name:string,track?:number):album{
    let music_album:album={
        artist_name:"Patrick Hyland",
        singer_name:"Mitski",
        title_name:"The Land Is Inhospitable and So Are We",
        track:10,
    }
    return music_album;
    
};
let album1:album=make_album("Artist1","Shivkumar Sharma","Music of the Mountains",10);
let album2:album=make_album("Artist2","Singer2","Title2");
let album3:album=make_album("Artist3","Singer3","Title3");

console.log(album1);
console.log(album2);
console.log(album3);
