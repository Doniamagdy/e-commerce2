import React from "react";


import Layout from "./layout.js";
import Register from "./register.js";

import Login from "./login.js";

import{Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from "./home.jsx";
import ProductDetails from "./productDetails.jsx";
import Cart from "./cart.jsx";
import NotFound from "./notfound.jsx";

function App(){
  let routers= createBrowserRouter([{
    path:'', element:<Layout />, children:[
      {path:'',element: <Navigate to={'home'}/>},

  {path:'home',element: <Home />},
  {path:'register',element: <Register />},
  {path:'login',element: <Login />},
  {path:'cart',element: <Cart />},
  // {path:'product',element: <Product />},
  {path:'productDetails/:id',element: <ProductDetails />},
  {path:'*',element: <NotFound />}

    ]
  }])
    return (
    <> 
  <RouterProvider router={routers}></RouterProvider>
  
  </> 
    );
  }
  



export default App;
