import React, { useState } from "react";

function ProductDetails(props){

    let [ProductCount, updateProductCount] = useState(0);

    let increaseCount = function(){
        updateProductCount(++ProductCount);
    }

    let decreaseCount = function(){
        updateProductCount(--ProductCount);
    }

    return(
        <div className="Product-div">
            <div className="Product-div-header">
                <h1>{props.name}</h1>
                <span className={props.isAvailable ? "spanAvailable" : "spanUnavailable"}>{props.isAvailable ? "Available" : "Unavailable"}</span>
            </div>
            <div className="Product-div-body">
                <div>{props.description}</div>
                <button onClick={increaseCount}>+</button>
                {ProductCount}
                <button onClick={decreaseCount}>-</button>
            </div>
        </div>
    );
}

export default ProductDetails;