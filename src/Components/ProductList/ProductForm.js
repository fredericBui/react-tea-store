import React, { useState } from "react";

function ProductForm(){

    let [productName, updateName] = useState("");
    let [productDescription, updateDescription] = useState("");
    let [productPrice, updatePrice] = useState("");
    let [productIsAvailable, updateIsAvailable] = useState("");
    let [productImage, updateImage] = useState("");

    function nameInputHandler(event){
        console.log(event.target.value);
        updateName(event.target.value);
    }

    function descriptionInputHandler(event){
        console.log(event.target.value);
        updateDescription(event.target.value);
    }

    function priceInputHandler(event){
        console.log(event.target.value);
        updatePrice(event.target.value);
    }

    function isAvailbleInputHandler(event){
        console.log(event.target.checked);
        updateIsAvailable(event.target.checked);
    }

    function imageInputHandler(event){
        console.log(event.target.value);
        updateImage(event.target.value);
    }

    return(
        <form method="get">
            <label htmlFor="productName">Name</label>
            <input 
                onChange={nameInputHandler}
                type="text" 
                name="productName" 
                id="productName"
                required>
            </input>
            <label htmlFor="productDescription">Description</label>
            <input
                onChange={descriptionInputHandler}
                type="text" 
                name="productDescription" 
                id="productDescription" 
                required>
            </input>
            <label htmlFor="productPrice">Price</label>
            <input
                onChange={priceInputHandler}
                type="number" 
                name="productPrice" 
                id="productPrice" 
                required>
            </input>
            <input
                onChange={isAvailbleInputHandler}
                type="checkbox" 
                name="productIsAvailable" 
                id="productIsAvailable" 
                required>
            </input>
            <label htmlFor="productIsAvailable">Availability</label>
            <input
                onChange={imageInputHandler}
                type="file" 
                name="productImage" 
                id="productImage" 
                required>
            </input>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default ProductForm;