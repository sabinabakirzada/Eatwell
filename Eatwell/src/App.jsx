import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import About from "./pages/about";
import Add from "./pages/add";
import Home from "./pages/homePAge/index";
import Menu from "./pages/menu";
import Offer from "./pages/offer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/offer" element={<Offer />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
