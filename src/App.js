import "./assets/css/styles.css";
import Explorer from "./components/Explorer";
import ImgExplorer from "./components/ImgExplorer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/explorer/" element={<Explorer />} />
        <Route path="/explorer/images/" element={<ImgExplorer />} />
      </Routes>
    </div>
  );
}

export default App;
