import { connect } from "react-redux";
import { addToCart } from "../reduxStore/reducers/shoppingCart";
import { asyncGetProducts } from "../reduxStore/reducers/productReducer";
import { Button, Card } from "@mui/material";
import { useEffect } from "react";

function Products(props) {
  function addToCart(item) {
    if (!props.shoppingCart.cart.includes(item)) {
      props.addToCart(item);
    }
  }

  const { category, asyncGetProducts } = props;
  useEffect(() => {
    asyncGetProducts(category.activeCategory);
  }, [category.activeCategory, asyncGetProducts]);

  return (
    <main>
      <h1>{props.category.activeCategory} </h1>
      <div className="products">
        {props.products.activeProducts.map((item, idx) => (
          <Card className="card" key={idx}>
            {item.name}: {item.description}
            <br />
            In Stock: {item.inStock}
            <br />
            <Button
              variant="contained"
              color="success"
              onClick={() => addToCart(item)}
            >
              Add to cart
            </Button>
          </Card>
        ))}
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  products: state.productReducer,
  category: state.categoryReducer,
  shoppingCart: state.shoppingCart,
});

const mapDispatchToProps = { addToCart, asyncGetProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
