import "./App.css";
import Sidebar from "./Components/SideBar";
import MainPage from "./Components/MainSection";
import PlayerControls from "./Components/Player";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainPage />
      <PlayerControls />
    </div>
  );
}

export default App;
