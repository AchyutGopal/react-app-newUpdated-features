import React, { useState, useEffect } from 'react';
import Bslide from './Bslide';

const Backend = () => {
  const [Languages, setLanguages] = useState([]);
  const [Frameworks,setFrameworks] = useState([]);
  useEffect(() => {
    fetch("https://jsonblob.com/api/00748003-9e62-11ea-84c9-cfb4035f439b")
      .then((response) => response.json())
      .then((json) => {
        const { Languages,Frameworks } = json;
        setLanguages([...Languages]);
        setFrameworks([...Frameworks]);
      });
  }, []);

  return (
    <div className="back">
    <Bslide></Bslide>
      <div id="accordion" className="mx-5 ">
        <div className="row my-2">
          {Languages.map((data, i) => (
            <>
              {(i > 0) ? <div className="col-xl-2 col-lg-3 col-md-3 col-sm-11">
              <div class="card stylings shadow my-4" style={{width: "10rem"}}>
  <div class="card-body">
   
    
    <button class="btn btn-style" type="button" data-toggle="collapse" data-target={`#languagesCollapse${i}`} aria-expanded="false" aria-controls="collapseExample">
                  {data.name}
                </button>
  </div>
</div>
                <div class="collapse" id={`languagesCollapse${i}`}>
                  <div class=" b card shadow m-4" style={{ width: "16rem" }}>
                    <div class="card-body">
                      <strong class="card-title" style={{ fontSize: "15px" }}>
                        {data.name}
                      </strong>
                      <p>
                        <small class="card-title my-0"> {data.desc}</small>
                      </p>

                    </div>
                  </div>
                </div>
              </div> : <b style={{ textAlign: "center" }} className="change-color">{data.label}</b>}

            </>
          ))}
        </div>
      </div>

      <div id="accordion" >
        <div className="row my-4 mx-4">
          {Frameworks.map((data, i) => (
            <>
              {(i > 0) ? <div className="col-xl-3 col-lg-3 col-md-3 col-sm-11">
              <div class="card shadow stylings my-4" style={{width: "10rem"}}>
  <div class="card-body">
   
    
    <button class="btn btn-style" type="button" data-toggle="collapse" data-target={`#frameWorkCollapse${i}`} aria-expanded="false" aria-controls="collapseExample">
                  {data.name}
                </button>
  </div>
</div>
                <div class="collapse" id={`frameWorkCollapse${i}`}>
                  <div class=" b card shadow m-4" style={{ width: "16rem" }}>
                    <div class="card-body">
                      <strong class="card-title" style={{ fontSize: "15px" }}>
                        {data.name}
                      </strong>
                      <p>
                        <small class="card-title my-0"> {data.desc}</small>
                      </p>

                    </div>
                  </div>
                </div>
              </div> : <b style={{ textAlign: "center" }} className="change-color">{data.label}</b>}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Backend