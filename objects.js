var playlist = {
  artistNames : 'songTitle'
}

function updatePlaylist(playlist, artistNames, songTitle) {
  playlist[ 'Phil Ochs' ] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(playlist, artistNames) {
  delete playlist[ 'Kanye' ] = "Gold Digger"
  return playlist
}