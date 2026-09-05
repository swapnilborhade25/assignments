import './App.css'
import products from "./products.json";
import { useState } from 'react';

function App() {
  const [category , setCategory] = useState("All");

  return (
    <>
      <div>
        <h2>Products</h2>
        {/* <GetSingleProduct /> */}

          <select value ={category} onChange={(e) => setCategory(e.target.value)}>
            <option value={"All"}>All</option>
            <option value={"stationary"}>Stationary</option>
            <option value={"furniture"}>Furniture</option>
            <option value={"accessories"}>Accessories</option>
          </select>

        <GetAllProduct category = {category}></GetAllProduct>
      </div>
    </>
  );
}

export default App

function GetSingleProduct(){
  return(
  <div>
      <h2>Prduct name : {products[0].name}</h2>
      <p>Product type : {products[0].type}</p>
      <p>Product price : Rs.{products[0].price}</p>
  </div>
  );
}

function GetAllProduct ({category}){
  const filterProduct = category === "All" ? products : 
                                    products.filter(p => p.type === category);

  return (
    <div>
    {filterProduct.map(p => {
      return(
      <div key={p.id}>
        <h2>Product Name : {p.name}</h2>
        {/* <p>Product Id : {p.id}</p> */}
        <p>Product Type : {p.type}</p>
        <p>Prodct Price : Rs.{p.price}</p>
        <br></br>
      </div>
      );
    })}
    </div>
  );
}
