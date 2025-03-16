import "./App.css";
import mockTracks from "./data/mockTracks";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import { useState } from "react";

function App() {
  // state for playlist
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  return (
    <>
      <h1>Playlist Builder</h1>
      <SearchResults tracks={mockTracks} />
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
    </>
  );
}

export default App;
