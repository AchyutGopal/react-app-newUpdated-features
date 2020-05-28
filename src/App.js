import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './RouterFiles/Navbar';

import Footer from './RouterFiles/Footer';
import HomePage from './RouterFiles/HomePage';

import AllFrontend from './FrontEndPage/AllFrontend';
import AllBackend from './BackendPage/AllBackend';
import AllCourses from './AllCourses/AllCourses';
import Wishlist from './Wishlist/Wishlist';
import Scrollspy from './Blog/Blog';

function App() {
  return (
    <div className="App">
    
      <Router>
      <Navbar/>
        <Route path="/home" exact component={Navbar}/>
        <Route path="/Frontend" exact component={AllFrontend}/>
        <Route path="/Backend" exact component={AllBackend}/>
        <Route path="/AllCourses" exact component={AllCourses}/>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/Wishlist" exact component ={Wishlist}></Route>
        <Route path="/Blog" exact component ={Scrollspy}></Route>

        
        
       
        <Footer/>
        
      </Router>
    
    </div> //Problem is all are in app.js so rearrnage the things accordingly.
  );
}

export default App;
