import React from 'react'
import Slide from "./Slide"
import Cart from "./Cart"
import Courses from "./Courses"
import './HomePage.css';


const HomePage=()=> {
    return (
        <div>

            <Slide/>
            <div className="jumbotron container back my-2">

<h5 className="fontSize mb-4 ">Become a Web Developer</h5>
<p className="paraStyle my-2">Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills.</p>
<button className="btn  btn-lg mt-4 btnStyle">Scroll down to learn more!</button>
            </div>
        <Cart/>
        <Courses/>
        <div className="jumbotron-fluid back-jumb p-4" style={{ position:"relative", display:"block", width: "100%"}}>
        <p class="font-style">Start Your Web Journey</p>    
        <iframe src="https://www.youtube.com/embed/v0Bkxc3YeIc" className="pb-4"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></div>
       
   

        </div>
    )
}

export default HomePage
