import React, {useEffect,useReducer} from 'react';
import Cart from './Cart';

const Slide = () => {
    const INITIAL_STATE = {
        images: [],
      }
      const reducer = (state, action) => {
          const { type, data } = action;
          switch(type) {
            case 'Fetch_Data': {
                
                return {
                  ...state, ...data
                }
              }
          }
      }
      const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
      const {images} = state
      useEffect(() => {
        fetch('https://jsonblob.com/api/bb51641f-9cd2-11ea-9a4c-2fff4269ce0f').then(response => response.json()).then(json => {
          dispatch({ type: 'Fetch_Data', data: { images: [...json] } })
          
        })
      }, []);
return(
  <>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    {images.map((item,index)=>
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

  </>
);
}

export default Slide;