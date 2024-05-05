"use strict";
function make_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_album("Ali", "Rng e Muhabbat");
let album2 = make_album("Madad", "Roshan Andhera");
let album3 = make_album("Ayaz", "Mausam e Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//no of tracks
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
let album4 = make_album2("Ali", "Dil hai", 30);
let album5 = make_album2("Madad", "Roshan Sitara", 25);
let album6 = make_album2("Iqbal", "Dil hai", 12);
console.log(album4);
console.log(album5);
console.log(album6);
