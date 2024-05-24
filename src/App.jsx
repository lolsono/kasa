import DecorativeImage from "./components/DecorativeImage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
console.log(Header);
function App() {
  return (
    <div>
      <div className="body-containner">
        <Header />
        <DecorativeImage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
