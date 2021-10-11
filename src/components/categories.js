import { connect } from "react-redux";
import { activate } from "../reduxStore/reducers/categoryReducer";
import { Tabs, Tab } from "@mui/material";

function Categories(props) {
  return (
    <section>
      <h1>Product Categories</h1>
      <Tabs value={false} textColor="primary" indicatorColor="primary">
        {props.categories.categories.map((category, idx) => (
          <Tab
            label={category.name}
            key={idx}
            onClick={() => props.activate(category.name)}
          />
        ))}
      </Tabs>
    </section>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categoryReducer,
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
