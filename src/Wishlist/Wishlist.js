import React, { useContext } from 'react'
import { CartContext } from '../RouterFiles/ContextApi';


const Wishlist = () => {
  const { state: { cart }, deleteItem } = useContext(CartContext)
  return (
    <div>
      {(cart.length<=0)?(<div className="back"><div class="alert alert-danger" role="alert">
  No Courses Wishlisted :(
</div><img src="https://media.giphy.com/media/3o85xonfOvQzN3eCNG/giphy.gif" width="289px" />
<div class="alert alert-success mt-2" role="alert">
  Please Wishlist some Course :)
</div>
</div>):(cart.map((data, index) => (
        <>
      
          <div className="  container col-xl-3 col-lg-4 col-md-6 col-sm-11">
                            <div class=" b card shadow m-4" style={{ width: "17rem" }}>
                                <img class="card-img-top" width="240" height="135" src={data.img} alt="Card image cap" />
                                <div class="card-body">
                                    <strong class="card-title" style={{ fontSize: "15px" }}>{data.tech}</strong>
                                    <p><small class="card-title my-0"> {data.guider}</small></p>
                                    <p class=" my-0" style={{ fontSize: "18px" }}>
                                        <span class="material-icons text-warning">grade</span>
                                        <span class="material-icons text-warning">grade</span>
                                        <span class="material-icons text-warning"> grade</span>
                                        <span class="material-icons text-warning">grade</span>
                                        <span class="material-icons text-warning">star_half</span>{data.star} <small> ({data.rating})</small></p>
                                        <button className="btn btn-danger" onClick={() => deleteItem(index)} >Remove</button>
                                </div>
                            </div>
                        </div>
        </>
      )
      )
      
      )
      }
    </div>
  )
}

export default Wishlist

