import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [frontend,setFrontend]=useState([]);
  useEffect(() => {
    fetch("https://jsonblob.com/api/09a9488b-9cee-11ea-9a4c-d9fb2263c424")
      .then((response) => response.json())
      .then((json) => { 
        const {frontend}=json;
        setFrontend([...frontend]);
       
      
        console.log(course);
      });
  }, []);


 
  return (
    <>
      <div className="" style={{backgroundColor:"#fff"}}>
        <h1>Some of our Courses</h1>
      

      <div className="row">
        {frontend.map((data,index) => (
          <>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div class=" b card shadow m-4" style={{ width: "16rem" }}>
              <marquee behavior="slide" direction="down"> <img
                  class="card-img-top"
                  width="240"
                  height="135"
                  src={data.img}
                  alt="Card image cap"
                /></marquee> 
               <marquee behavior="slide" direction="up"><div class="card-body">
                  <strong class="card-title" style={{ fontSize: "15px" }}>
                    {data.tech}
                  </strong>
                  <p>
                    <small class="card-title my-0"> {data.guider}</small>
                  </p>
                  <p class=" my-0" style={{ fontSize: "18px" }}>
                    <span class="material-icons text-warning">grade</span>
                    <span class="material-icons text-warning">grade</span>
                    <span class="material-icons text-warning"> grade</span>
                    <span class="material-icons text-warning">grade</span>
                    <span class="material-icons text-warning">star_half</span>
                    {data.star} <small>({data.rating})</small>
                    
                  </p>
                </div></marquee> 
              </div>
            </div>
          </>
        ))}
      </div>
      </div>
    </>
  );
};

export default Courses;
