import React from "react";
import Tracklist from "../Tracklist/Tracklist";

// user custom playlist
function Playlist({ playlistName, playlistTracks }) {
  return (
    <div>
      <h2>{playlistName}</h2>
      <Tracklist tracks={playlistTracks} />
    </div>
  );
}

export default Playlist;
