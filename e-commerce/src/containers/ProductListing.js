import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../redux/actions/productAction"
import axios from "axios";
const ProductListing = () => {
    //*A
  
    const products = useSelector((state) => state);

  //* As we are using redux state so we dont need to pass this product as props
  //* we can access this state any of the component
  
  const dispatch =useDispatch();
  //* D


  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      
    dispatch(setProducts(response.data)); 

    //*E => passed products in our ACTION AS setProducts
    //* after passing products in dispatch  action ==> it is going to productAction and ang returm{ the object inside }
    //* => and this object is taken by the reducer 
    //* There reducer will get the type and payload..type is the set product and once we get the setPRODUCT ,START passing new state
    //![ so PTO TO reducer file==>product reducer]
  };

  //*C => after fetching data from server we need to add this data in our store .. so we need to dispatch and action
  //* so the action is setProduts

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("vimal :" , {products});
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
