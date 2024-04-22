function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_album("Ali", "Rng e Muhabbat");
var album2 = make_album("Madad", "Roshan Andhera");
var album3 = make_album("Ayaz", "Mausam e Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//no of tracks
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = make_album("Ali", "Dil hai", "3o");
var album5 = make_album("Mahad", "Roshan Sitara", "25");
var album6 = make_album("Iqbal", "Dil hai", "12");
console.log(album4);
console.log(album5);
console.log(album6);
