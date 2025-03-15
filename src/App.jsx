import "./App.css";
import mockTracks from "./data/mockTracks";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <>
      <h1>Playlist Builder</h1>
      <SearchResults tracks={mockTracks} />
    </>
  );
}

export default App;
