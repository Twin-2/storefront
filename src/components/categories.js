import { connect } from "react-redux";
import { activate } from "../reduxStore/reducers/categoryReducer";

function Categories(props) {
  console.log("categories", props.categories);
  return (
    <section>
      <h1>Product Categories</h1>
      <nav>
        {props.categories.categories.map((category, idx) => (
          <span onClick={() => props.activate(category.name)} key={idx}>
            {category.name}
          </span>
        ))}
      </nav>
    </section>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categoryReducer,
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
