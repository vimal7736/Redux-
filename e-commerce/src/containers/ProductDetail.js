import axios from "axios";
import React, { useEffect } from "react";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productAction";

const ProductDetail = () => {
  const { productId } = useParams(); //*f
  //&I=>
  //*next is we need to access the selected products .. so make use of use selector
  let  product = useSelector((state) => state.product); // here .product u can find on index.js in combineReducer "//*products"
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch(); //*h
  console.log("knnk", product);

  const fetchProductDetail = async () => {
    //*g
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("eRer", err);
      });
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return ()=>{
      dispatch(removeSelectedProducts())
    }
  }, [productId]);

  return (
    <div>

    <div  className="movie-container">
      {product.length === 0 ? (
        <div>...Loading</div>
        ) : (
        <div  className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">Rs {price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
  );
};

export default ProductDetail;
