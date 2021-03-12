import React, { useState } from "react";
import Products from "../products/products";
import Cart from "../cart/cart";
import product from "../../services/dataService";
import { connect } from 'react-redux';
import productAction from '../../action/ProductAction';

const Dashboard = () => {
  const [productsListing, setProductsListing] = useState(product);

  return (
    <>
      <div className="container mb-4">
        <div className="row">
          <div className="col">
            <h1>Products</h1>
            <Products
              // productsListing={productsListing}
              // setProductsListing={setProductsListing}
            />
          </div>
          <div className="col">
            <h1>Carts</h1>
            <Cart
              productsListing={productsListing}
              setProductsListing={setProductsListing}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// export default Dashboard;
const mapDispatchToProps = dispatch => ({
  setProductData: (data) => dispatch(productAction.setProductData(data))
})

const mapStateToProps = state =>({
  productsListing:  (state.productReducer && state.productReducer) || [],
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
