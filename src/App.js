import "./assets/scss/index.scss";
import "animate.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounsultingMain from "./component/Counsulting/CounsultingMain";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";

function App() {
  return (
    <div>
      <div className="Screen">
        <div className="header_area">
          <Header></Header>
        </div>
        <div className="screen_area">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/counsulting" element={<CounsultingMain />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
