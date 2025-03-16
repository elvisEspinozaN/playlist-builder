import React from "react";
import Tracklist from "../Tracklist/Tracklist";

// display search results
function SearchResults({ tracks }) {
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={tracks} />
    </div>
  );
}

export default SearchResults;
