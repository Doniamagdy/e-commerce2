import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  let [errorMessage, setErrorMessage] = useState(" ");
  let [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    getLoggedUserCart();
  }, []);

  async function getLoggedUserCart() {
    let response = await axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setErrorMessage(err.response.data.message);
      });

    if (response) {
      setCartProducts(response.data.data.products);
    }
    console.log(cartProducts);
  }

  return <>
  <h1>Hi</h1>
      {errorMessage ? 
        <h2 className="alert-danger">{errorMessage}</h2>
       : 
        <div>
          {cartProducts?.map((product) => {
            return <div key={product._id}>
                <div className="row">
                  <div className="col-md-2">
                    <img className="w-100" src={product.product.imageCover} />
                  </div>
                  <div className="col-md-8">
                    <h2>{product.product.title}</h2>
                    <h5>{product.product.category.name}</h5>
                    <p>
                      <span>{product.price} EGP</span>
                      <span></span>
                    </p>
                    <p>Total Price: {product.count * product.price}</p>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex">
                      <button className="btn btn-success mx-2">-</button>
                      <span>{product.count}</span>
                      <button className="btn btn-success mx-2">+</button>
                    </div>
                  </div>
                </div>
              </div>
           
          })}
        </div>
      }
    </>
  ;
}
