import React from "react";
import "./Product.css";
import ProductDetails from "./ProductDetails";

function Product(props){

    return(
        <article className="Product-article">
            <img src={props.image} className="Product-image"></img>
            <ProductDetails name={props.name} isAvailable={props.isAvailable} description={props.description}></ProductDetails>
        </article>
    );
}

export default Product;