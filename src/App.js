import Header from "./components/header";
import Footer from "./components/footer";
import Storefront from "./components/storefront";
import "./css/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Storefront />
      <Footer />
    </div>
  );
}

export default App;
