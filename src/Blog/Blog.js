import React, { useReducer, useEffect } from "react";
import "../Blog/Blog.css";
import { Link } from "react-router-dom";

const Blog=()=> {
  const INITIAL_STATE = {
    images: [],
  };
  const reducer = (state, action) => {
    const { type, data } = action;
    switch (type) {
      case "Fetch_Data": {
        return {
          ...state,
          ...data,
        };
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { images } = state;
  useEffect(() => {
    fetch("https://jsonblob.com/api/a5dce856-a04f-11ea-b362-db283bbffcaa")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "Fetch_Data", data: { images: [...json] } });
        console.log(json);
      });
  }, []);

  return (
    <div>
      <body data-spy="scroll" data-offset="15" data-target="#myScrollSpy">
        <div class="container">
          <h1 className="">Our Blog</h1>
          <p class="lead">
            <i>Place where people share their learnings.</i>
          </p>
          <div class="row">
            <div class="col-sm-3" id="myScrollspy">
              <div class="list-group">
                {images.map((data, index) => (
                  <button type="button" className="btn  btnStyles border">
                    {" "}
                    <a className="aStyles" href={`#section1${index}`}>{data.name}</a>
                  </button>
                ))}{" "}
              </div>
            </div>
            <div class="col-sm-9">
              {images.map((data, index) => (
                <>
                  <div id={`section1${index}`}>
                    <h4>{data.name} </h4>

                    <p>{data.matt1}</p>
                    <p>{data.matt2}</p>
                    <p>{data.matt3}</p>
                    <p>{data.matt4}</p>
                   
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Blog;
