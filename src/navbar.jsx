import React from "react";
import { Link } from "react-router-dom"

// class Navbar extends Component {
//     render() {
//       return   <div>

     
//       <link to={"/home"}>Home</link>
//       <link to={"/register"}>Register</link>
//       <link to={"/login"}>Login</link>
//       </div> 
//     }
//   }
function Navbar(){
    return(
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li>
      <Link to={"/home"} className="nav-link">Home</Link>
      </li>
      <li >
      <Link to={"/register"} className="nav-link">Register</Link>
      </li>
      <li >
      <Link to={"/login"} className="nav-link">Login</Link>
      </li>
      <li >
      <Link to={"/cart"} className="nav-link">Cart</Link>
      </li>
    </ul>
    </div>
  </div>

</nav>
      
    )
}

  export default Navbar