import React,{useEffect,useState} from 'react'
import "./Frontend.css";




function Frontend() {


    const [course, setCourse] = useState([]);
    let [frontend,setFrontend]=useState([]);
    useEffect(() => {
      fetch("https://jsonblob.com/api/87746621-9dc2-11ea-bd6d-816475d2435e")
        .then((response) => response.json())
        .then((json) => { 
          const [{frontend:x}]=json;
          const [{angular}] = x;
          setFrontend(frontend=[...angular]);
       
         
        
          
        });
    }, []);

    return (
        
        <div className="back ml-5 my-2 py-4" >
            <h1 className="display-4 py-2">Angular</h1>
            {console.log(frontend)}
           
           {frontend.map((a,i)=>{

           return (
            <div id="accordion" >

  
      <h5 class="mb-0">
        <div className="">
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample">
 {a.label}
  </button>         </div>
      </h5>
    <p>
</p>
      <div class="d-flex">
        {a.data.map((b,index)=>{

return (
    <>

{/* */}

<div class="collapse" id={`collapseExample${i}`}>

<ul class="list-group ">
<li class="list-group-item ">{b}</li>
  
</ul>


</div>


    </>
    
)

        })}
      </div>
    
  
  </div>)
           }
  )}
        </div>
    )
}

export default Frontend
