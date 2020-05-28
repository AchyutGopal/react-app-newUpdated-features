import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from '../RouterFiles/ContextApi'; 

const Navbar = () => {
  const { state:{cart} } = useContext(CartContext);
  return (
    <div>
      <header class="mb-2">
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav-styles d-flex justify-content-around ">

        <Link to="/" class="navbar-brand " href="#">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
              width="110"
              height="32"
              alt="" className="img-fluid"
            />
          </Link>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
         
          <Link to='/Frontend' class="nav-link  btn btn-quaternary mx-5 px-5" href="#">
            FrontEnd
          </Link>
          <Link to="/Backend" class="nav-link  btn btn-quaternary mx-5 px-5" href="#">
            BackEnd
          </Link>
          <Link to="/AllCourses" class="nav-link mr btn btn-quaternary mx-5 px-5" href="#">
            All Courses
          </Link>
          <Link to="/Blog" class="nav-link mr btn btn-quaternary mx-5 px-5" href="#">
          Blog
          </Link>
                        
          <Link to="/Wishlist" class="nav-link btn btn-quaternary mx-5 px-5" href="#">
          <span class="material-icons">bookmarks</span>Wishlist({cart.length})
          </Link>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
        </nav>
      </header>

    

    </div>
  );
};

export default Navbar;
