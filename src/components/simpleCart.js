import { connect } from "react-redux";
import { removeFromCart } from "../reduxStore/reducers/shoppingCart";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function SimpleCart(props) {
  return (
    <div className="simpleCart">
      {props.shoppingCart.cart.map((item, idx) => (
        <div key={idx}>
          {/* {console.log(item)} */}
          <span>{item.name}</span>
          <HighlightOffIcon onClick={() => props.removeFromCart(item)} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
