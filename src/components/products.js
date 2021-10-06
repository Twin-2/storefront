import { connect } from "react-redux";
import { addToCart } from "../reduxStore/reducers/shoppingCart";
import { Button, Card } from "@mui/material";

function Products(props) {
  function addToCart(item) {
    if (!props.shoppingCart.cart.includes(item)) {
      props.addToCart(item);
    }
  }

  return (
    <main>
      <h1>{props.category.activeCategory} </h1>
      <div className="products">
        {props.products.activeProducts.map((item, idx) => (
          <Card className="card" variant="outlined" raised={true} key={idx}>
            {item.name}: {item.description}
            <br />
            In Stock: {item.inventory}
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

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
