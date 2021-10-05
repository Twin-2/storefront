import Header from "./components/header";
import Footer from "./components/footer";
import Categories from "./components/categories";
import Products from "./components/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const categories = ["Food", "Clothes", "Games"];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Categories />
        <Switch>
          {categories.map((category) => (
            <Route exact path={`/${category}`}>
              <Products category={category} />
            </Route>
          ))}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
