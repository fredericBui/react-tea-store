import React from "react";
import './App.css';
import ProductForm from "./Components/ProductList/ProductForm";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <ProductForm></ProductForm>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
