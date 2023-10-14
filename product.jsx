import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {

async function addProductToCart(productId){
  console.log(productId)

  let res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
    productId
  },{
    headers:{
      token: localStorage.getItem('token')
    }

  })
  console.log(res)
}


  return (
  
    <div className="col-lg-4">
      
        <div className="px-2 py-3 cursor-pointer text-center mt-3">
        <Link  className="a" to={"/ProductDetails/" + product._id}>
          <img className="w-100" src={product.imageCover} />
          <h5>{product.category.name}</h5>
          <h4> {product.title.split(" ").slice(0, 2).join(" ")}</h4>
          <p>
            <span>{product.price} EGP</span>
            <span>
              <i className="fas fa-star rating-color ">
                {product.ratingsAverage}
              </i>
            </span>
          </p>
          </Link>
          <button onClick={() => addProductToCart(product._id)}  className="btn btn-success mt-3"> + Add to cart</button>
        </div>
     
    </div>
   
  );
}
export default Product;
