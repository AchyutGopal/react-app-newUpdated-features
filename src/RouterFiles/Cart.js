import React,{useEffect,useReducer} from 'react';
import './Cards.css';
import Slide from './Slide';

function Cart() {



  const INITIAL_STATE = {
    content: [],
  }
  const reducer = (state, action) => {
      const { type, data } = action;
      switch(type) {
        case 'Fetch_Data': {
            console.log(data)
            return {
              ...state, ...data
            }
          }
      }
  }
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const {content} = state
  useEffect(() => {
    fetch('https://jsonblob.com/api/0974cbac-9cc9-11ea-9a4c-735ab2b179d3').then(response => response.json()).then(json => {
      dispatch({ type: 'Fetch_Data', data: { content: [...json] } })
      
    })
  }, []);



  return (
    <>


    <div className="row container-style p-4 my-2">

      


      {content.map((a,i)=>{
return(

<>
<div className="d-flex justify-content-center col-xl-6 col-lg-6 col-sm-12 col-md-12">
<div className="card cardsStyle shadow-md mb-2" style={{width: "18rem"}}>
  <img className="card-img-top" src={a.img}  alt="Card image cap"/>
  <div className="card-body">
<h5>{a.name}</h5>
<p className="card-text">{a.mat1}</p>
    <button type="button" className="btn button-style" data-toggle="modal" data-target={`#exampleModal${i}`}>
About {a.name}
</button>
  </div>
</div>



<div className="modal fade" id={`exampleModal${i}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
<h5 className="modal-title" >{a.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {a.matter}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
</div>
</>
       ) })}

     


    </div>
    </>
  )
}

export default Cart
