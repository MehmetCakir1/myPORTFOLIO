import ProjectContainer from "../components/ProjectContainer";
import { useState,useEffect } from "react";
import data from "../helpers/data"

const Projects = () => {
  const [projects,setProjects]=useState(data)
//  console.log(projects);


const handleProjects = (e)=>{
  if(e.target.value=="all"){
    setProjects(data)
  }else{
    setProjects(
    data.filter((item)=>item.tool==e.target.value)
  )
}
}
  return (
    <div>
      <ProjectContainer projects={projects} handleProjects={handleProjects}/>
      {/* <div className="page-header">
        <h1 className="py-1">PROJECTS</h1>
      </div> */}
    </div>
  )
}

export default Projects