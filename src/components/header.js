import { connect } from "react-redux";
import { IconButton, Badge, Paper } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header(props) {
  return (
    <Paper className="header" elevation={2}>
      Best Store Ever
      <IconButton aria-label="cart">
        <Badge badgeContent={props.shoppingcart.cart.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  shoppingcart: state.shoppingCart,
});

export default connect(mapStateToProps)(Header);
