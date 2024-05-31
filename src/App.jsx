import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Routing from "./Routes/Routes.jsx";
function App() {
  return (
    <div>
      <Header />
      <main className="body-containner">
        <Routing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
