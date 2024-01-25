import Home from "./Features/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccPortfolio from "./Features/OverAllPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/over-all-portfolio" element={<AccPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
