import axios from "axios";
import React, {Component, useEffect,useState} from "react";
import Product from "./product";
function Home() {

  let [products, setProducts] = useState([])

    useEffect(()=>{
     getAllProducts()

      
    }, [])


    async function getAllProducts (){
      let { data }=  await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      console.log(data.data)
      setProducts(data.data)
    }


      return    <div className="row mt-3 ">
      
        {products.map((product)=>{
          return <div  key={product._id} className="col-md-3">
          
          <Product product={product} />
       
          </div>
        })}

      </div>

      }
    
  

  export default Home