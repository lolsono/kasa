import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Routing from "./Routes/Routes.jsx";
function App() {
  return (
    <div>
      <div className="body-containner">
        <Header />
        <Routing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
