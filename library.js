var library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monitem",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                  }
     }
     
     var printPlaylists = function () {
         for (item in library.playlists) {
           let playlistFigure = item;
           let name = library.playlists[item].name;
           let unitTracks = library.playlists[item].tracks.length;  
           console.log(`${playlistFigure}: ${name} - ${unitTracks} tracks`);
         }  
     };
   
     var printTracks = function () {
       for (item in library.tracks) {
           let trackNumber = item;
           let artist = library.tracks[item].artist;
           let name = library.tracks[item].name;
           let album = library.tracks[item].album;
           console.log(`${trackNumber}: ${name} by ${artist} (${album})` );
       }
     };

     var printPlaylist = function (identityPlaylist) {
       let playlistName = library.playlists[identityPlaylist].name;
       let unitTracks = library.playlists[identityPlaylist].tracks.length;
       console.log(`${identityPlaylist}: ${playlistName} - ${unitTracks} tracks`);
       for (item of library.playlists[identityPlaylist].tracks) {
           let songTitle = library.tracks[item].name;
           let artist = library.tracks[item].artist;
           let album = library.tracks[item].album;
           console.log(`${item}: ${songTitle} by ${artist} (${album})`);
       }
     };
  
     var addTrackToPlaylist = function (identTrack, identityPlaylist) {
       library.playlists[identityPlaylist].tracks.push(identTrack);
       console.log(`${identTrack} was added to playlist ${identityPlaylist}`);
     }
 
     var item = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }

     var addTrack = function (name, artist, album) {
     
       let uniqueID = item();
       library.tracks[uniqueID] = {
           id: uniqueID,
           album: album,
           artist: artist,
           name: name
       }
       console.log(library.tracks);
     }
   
     addTrack("Lowrider", "War", "Why Cant We Be Friends");

     var addPlaylist = function (name) {
   
       let uniqueID = item();
       library.playlists[uniqueID] = {
           id: uniqueID,
           name: name,
           tracks: []
       }
     }
     
     var printSearchResults = function(query) {
     
       qstr = new RegExp(q, 'i')
  console.log(qstr)
  for (item in library.tracks){
    var track = library.tracks[item]
    if (qstr.check(track.name) || qstr.check(track.artist) || qstr.check(track.album)){
      printTracks(item)
    }
  }
}