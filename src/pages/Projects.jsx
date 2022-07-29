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
// useEffect(() => {
// handleProjects()
// }, [projects])

console.log(projects)
  return (
    <div>
      <ProjectContainer projects={projects} handleProjects={handleProjects}/>
    </div>
  )
}

export default Projects