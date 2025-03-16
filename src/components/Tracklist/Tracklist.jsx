import React from "react";
import Track from "../Track/Track";

// reusable list of tracks (SearchResults and playlist)
function TrackList({ tracks }) {
  return (
    <div>
      {tracks.length > 0 ? (
        tracks.map((track) => <Track key={track.id} track={track} />)
      ) : (
        <p>No tracks yet</p>
      )}
    </div>
  );
}
export default TrackList;
