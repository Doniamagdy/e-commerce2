
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function ProductDetails() {

  let params = useParams()
  let [productDetails, setProductDetails] = useState({})

  useEffect(() => { 
    getProductDetails(params.id)
  }, [])


async function getProductDetails(productId){
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products/' + productId )
    setProductDetails(data.data)
    console.log(productDetails);
}

      return   (
      
      <div className="row align-items-center">
      <div className="col-md-3">
      <img className="w-100"  src={productDetails?.imageCover} alt={productDetails?.title}/>
      </div>

      <div className="col-md-9">
      <h1>{productDetails?.title}</h1>
        <h5>{productDetails?.category?.name}</h5>  
      <p>{productDetails?.description}</p>
      <span>
      <p>Price:{productDetails?.price}</p>
      </span>
      
      <p> {productDetails?.ratingsAverage}</p>
      <button className="btn btn-success mt-3">Add to cart</button>

      </div>
    
      
      </div>


)  }
  

  export default ProductDetails