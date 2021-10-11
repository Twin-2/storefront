import Categories from "./categories";
import Products from "./products";
import SimpleCart from "./simpleCart";
import { useEffect } from "react";
import { connect } from "react-redux";
import { asyncGetCategories } from "../reduxStore/reducers/categoryReducer";

function Storefront(props) {
  useEffect(() => {
    props.asyncGetCategories();
  }, []);

  return (
    <>
      <Categories />
      <Products />
      <SimpleCart />
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categoryReducer,
});

const mapDispatchToProps = { asyncGetCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Storefront);
