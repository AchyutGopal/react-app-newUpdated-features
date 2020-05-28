import React from 'react';
import FrontendCourses from "../FrontEndPage/FrontendCourses"
import BackendCourses from '../BackendPage/BackendCourses';



const AllCourses = () => {
    return (
        <div>
            <hr/>
         <FrontendCourses/>
         <BackendCourses/>
        </div>
    )
}

export default AllCourses