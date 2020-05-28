import React, {useEffect,useReducer} from 'react';

const Bslide = () => {
    const INITIAL_STATE = {
        images: [],
        isAPILoaded : false
      }
      const reducer = (state, action) => {
          const { type, data } = action;
          switch(type) {
            case 'Fetch_Data': {
                return {
                  ...state, ...data,
                  isAPILoaded:true
                }
              }
          }
      }
      const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
      const {images,isAPILoaded} = state
      useEffect(() => {
        fetch('https://jsonblob.com/api/c0f78921-9ead-11ea-84c9-8f7577aad8c0').then(response => response.json()).then(json => {
          dispatch({ type: 'Fetch_Data', data: { images: [...json] } })
          
        })
      }, []);
return(
  <>
   {!isAPILoaded ? (<img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" />) : (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    {images.map((index)=>
    <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index==0?"active":""}></li>
    )}
  </ol>

    <div className="carousel-inner">
      {images.map((item,index)=>
       <div className={`carousel-item ${index==0?"active":""}`}>
        <img src={item} alt="Los Angeles" className="img-fluid" style = {{width:"100%",height:"400px"}}/>
      </div>
      )}
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
   )}
  </>
);
}

export default Bslide;