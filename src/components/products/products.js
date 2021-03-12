import React, {useState, useEffect} from "react";
import  "./product.css";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import productAction from '../../action/ProductAction';




const Products = ({productsListing, setProductData}) => {
    // const addToCart = (product) => {
    //     const updatedProductsListing = productsListing.map((prod, index) => {
    //         if(prod.Name === product.Name) {
    //             prod.isInCart = true;
    //         }
    //         return prod
    //     })
    //     setProductsListing(updatedProductsListing);
    // }
    const cartQtyChange = (product, isIncrease = false) => {
        const updatedProductsListing = productsListing.map((prod, index) => {
            if(prod.Name === product.Name) {
                prod.cartQty = isIncrease  ? prod.cartQty + 1 : prod.cartQty > 0 ? prod.cartQty -1 : 0;
                prod.qty = isIncrease  ? prod.qty - 1 : prod.qty > 0 ? prod.qty + 1 : prod.qty;
            }
            return prod
        })
        setProductData(updatedProductsListing);
    }
    return (
        <>
            <div className="container mh-80">
                {productsListing && productsListing.map((product, index) => {
                    if(product.qty) {
                        return (
                            <div className="row product-box rounded" key={index}>
                                <div className="col-sm ">
                                    <div className="font-bold">
                                        {product.Name}
                                    </div>
                                    <div className="location">
                                        {product.Location}
                                    </div>
                                    <div className="price">
                                        ${product.price}
                                    </div>
                                </div>
                                <div className="col-sm content-center">
                                    <div>
                                        <div className="input-group">
                                            <span className="input-group-btn">
                                                <Button variant="light" disabled={product.cartQty <= 0} onClick={() => { cartQtyChange(product, false) }}>-</Button>
                                            </span>
                                            <input type="text" name="cartQty" className="form-control input-number" defaultValue={product.cartQty} min="1" max={product.qty} />
                                            <span className="input-group-btn">
                                                <Button variant="light" disabled={!product.qty} onClick={() => { cartQtyChange(product, true) }}>+</Button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}

// export default Dashboard;
const mapDispatchToProps = dispatch => ({
    setProductData: (data) => dispatch(productAction.setProductData(data))
  })
  
  const mapStateToProps = state =>({
    productsListing:  (state.productReducer && state.productReducer) || [],
  })
export default connect(mapStateToProps, mapDispatchToProps)(Products);