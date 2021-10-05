import { connect } from "react-redux";

function Products(props) {
  console.log("products", props.products);
  return (
    <section>
      <h1>{props.category.activeCategory} </h1>
      <nav>
        {props.products.products.map((item) => (
          <div key={item.name}>
            {item.name}: {item.description}, {item.inventory}
          </div>
        ))}
      </nav>
    </section>
  );
}

const mapStateToProps = (state) => ({
  products: state.productReducer,
  category: state.categoryReducer,
});

export default connect(mapStateToProps)(Products);
