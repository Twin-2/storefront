import Header from "./components/header";
import Footer from "./components/footer";
import Categories from "./components/categories";
import Products from "./components/products";
import "./css/app.scss";
import SimpleCart from "./components/simpleCart";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      <Footer />
    </div>
  );
}

export default App;
