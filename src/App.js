import "./assets/css/styles.css";
import Explorer from "./components/Explorer";
import ImgExplorer from "./components/ImgExplorer";
import Login from "./components/Login";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/folders/" element={<Explorer />} />
        <Route path="/folders/:folder_name/images/" element={<ImgExplorer />} />
      </Routes>
    </div>
  );
}

export default App;
