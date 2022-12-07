import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent=()=> {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    console.log("product",product.id);
    return (
      <div className="four column wide" key={id}>
        <Link to = {`/product/${product.id}`}>
        <div  className="ui link cards"> 
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">Rs {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
       </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default ProductComponent;
