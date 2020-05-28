import React, { useEffect, useReducer } from 'react';
import {Link } from 'react-router-dom';

const Pages = () => {
    const INITIAL_STATE = {
        pages: [],
    }
    const reducer = (state, action) => {
        const { type, data } = action;
        switch (type) {
            case 'Fetch_Data': {

                return {
                    ...state, ...data
                }
            }
        }
    }

    function Show() {
        var x = document.getElementById("display-thing");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const { pages } = state
    useEffect(() => {
        fetch('https://jsonblob.com/api/13709cac-9d90-11ea-bd6d-3f84359563c5').then(response => response.json()).then(json => {
            dispatch({ type: 'Fetch_Data', data: { pages: [...json] } })

        })
    }, []);
    return (
        <div>
            <div className="row mt-3 mb-3">
                <div className="col">
                    <button type="button" class="btn btn-outline-secondary btn-lg btn-block" onClick={()=>Show()} >Front-End</button>
                </div>
                <div className="col">
                    <button type="button" class="btn btn-outline-secondary btn-lg btn-block">Back-End</button>
                </div>
            </div>
            {pages.map(({ name, desc, frameWorks, languages }) =>
                <div>
                    <b> {name} </b>
                    <p>{desc}</p>
                    <div className="row display-thing">
                        <div className="col">
                            <b>FrameWorks Used :</b>
                            {frameWorks.map((fw) =>
                                <>
                                    <p>{fw}</p>
                                </>
                            )}
                        </div>
                        <div className="col">
                            <b>Languages Used :</b>
                            {languages.map((ln) =>
                                <>
                                    <p>{ln}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Pages