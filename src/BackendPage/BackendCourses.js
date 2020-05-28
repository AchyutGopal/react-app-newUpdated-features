import React, { useContext } from 'react';
import '../RouterFiles/Footer.css';
import { CartContext } from '../RouterFiles/ContextApi';

const BackEnd = () => {
    const { state, addBackEndItem } = useContext(CartContext);
    const { backEnd } = state

    return (
        <>
        <hr/>
        <p className="display-4">Our BackEnd Courses</p>
        <div className="row border ">
            {backEnd.map((data, index) => (
                <>
                    <div className="container col-xl-3 col-lg-4 col-md-6 col-sm-11 ">
                        <div class=" b card shadow m-4" style={{ width: "17rem" }}>
                        <marquee behavior="slide" direction="down"> <img class="card-img-top" width="240" height="135" src={data.img} alt="Card image cap" /></marquee>
                            <marquee behavior="slide" direction="up"> <div class="card-body">
                                <strong class="card-title" style={{ fontSize: "15px" }}>{data.tech}</strong>
                                <p><small class="card-title my-0"> {data.guider}</small></p>
                                <p class=" my-0" style={{ fontSize: "18px" }}>
                                    <span class="material-icons text-warning">grade</span>
                                    <span class="material-icons text-warning">grade</span>
                                    <span class="material-icons text-warning"> grade</span>
                                    <span class="material-icons text-warning">grade</span>
                                    <span class="material-icons text-warning">star_half</span>{data.star} <small>({data.rating})</small></p>
                                <button onClick={() => addBackEndItem(index)} disabled={data.incart=="true"?true:false} className="btn btn-danger my-3 btn-md ">Wishlist</button>
                            </div></marquee>
                        </div>
                    </div>
                </>
            ))}
        </div>

    </>)
}

export default BackEnd