import Home from "./component/Home/Home";
import "./assets/scss/index.scss";
import "animate.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="Screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
