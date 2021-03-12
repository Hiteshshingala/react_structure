import React, {useState, useEffect} from "react";
import  "./cart.css";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import productAction from '../../action/ProductAction';


const Cart = ({productsListing, setProductData}) => {
    const removeToCart = (product) => {
        const updatedProductsListing = productsListing.map((prod, index) => {
            if(prod.Name === product.Name) {
                prod.qty  = prod.qty + prod.cartQty;
                prod.cartQty  = 0;
            }
            return prod
        })
        setProductData(updatedProductsListing);
    }
    return (
        <>
            <div className="container mh-80">
                {productsListing && productsListing.map((product, index) => {
                    if(product.cartQty) {
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
                                    <div className="price">
                                        {product.cartQty} qty
                                    </div>
                                </div>
                                <div className="col-sm content-center">
                                    <div>
                                        <Button variant="primary" onClick={() => {removeToCart(product)}}>Remove To Cart</Button>
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

const mapDispatchToProps = dispatch => ({
    setProductData: (data) => dispatch(productAction.setProductData(data))
  })
  
  const mapStateToProps = state =>({
    productsListing:  (state.productReducer && state.productReducer) || [],
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);