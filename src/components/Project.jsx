import { useState } from "react";
import {Link} from "react-router-dom"

const Project = ({ name, image, url, source }) => {

  const [showBtn,setShowBtn]=useState(true)

 
  return (
      <div
        className="project-card col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center align-items-center flex-column mb-2 mb-lg-4 rounded-3">
        <div className="project-imgDiv d-flex justify-content-center align-items-center" onMouseOver={()=>setShowBtn(false)} onMouseOut={()=>setShowBtn(true)}>
          <img src={`/images/${image}.PNG`} alt={name} className="rounded-3"/>
          <div className={`btnDiv  flex-column justify-content-center align-items-center gap-1 rounded-3 ${showBtn ? "d-none" : "d-flex"}`}>
          <h3 className="text-white text-center projectName">{name}</h3>
        <Link to={`${url.slice(6)}`} target="_blank"><button className="btn visit border-0 fw-bold" >Visit Page</button></Link> 
        <Link to={`${source.slice(6)}`} target="_blank"><button className="btn source border-0 fw-bold">Source Code</button></Link> 
      </div>
        </div>
        
      </div>
 
  );
};

export default Project;
