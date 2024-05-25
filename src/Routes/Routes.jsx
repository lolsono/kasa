import { Route, Routes } from "react-router-dom";
import About from "../pages/About.jsx";
import ErrorPages404 from "../pages/Error404Page.jsx";
import Home from "../pages/Home.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<ErrorPages404 />} />
    </Routes>
  );
}

export default Routing;