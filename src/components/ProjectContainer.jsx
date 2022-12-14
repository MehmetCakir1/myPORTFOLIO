import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Project from "./Project";

const ProjectContainer = ({ projects, handleProjects }) => {
  const {theme,setTheme,changeTheme}=useContext(DataContext)

  const changeColor = (a) => {
    let items = document.querySelectorAll(".single-category.active-category");
    if (items.length && a.className!="button__vertical" && a.className!="button__horizontal") {
      items[0].className = "single-category";
    }
    a.target.className = "single-category active-category";
  };

  return (
    <>    <div className="row container m-auto">
      <div className="buttons d-flex justify-content-center align-items-center gap-2 mb-5 mt-2 py-1 flex-wrap">
        <button
          onClick={(e) => {
            handleProjects(e);
            changeColor(e);
          }}
          value="all"
          className="single-category active-category"
        >
          <span>ALL</span>
        </button>
        <button
          onClick={(e) => {
            handleProjects(e);
            changeColor(e);
          }}
          value="react"
          className="single-category"
        >
          <span>REACT</span>
        </button>
        <button
          onClick={(e) => {
            handleProjects(e);
            changeColor(e);
          }}
          value="javascript"
          className="single-category"
        >
          <span>JAVASCRIPT</span>
        </button>
        <button
          onClick={(e) => {
            handleProjects(e);
            changeColor(e);
          }}
          value="css"
          className="single-category"
        >
          <span> CSS</span>
        </button>
        <button
          onClick={(e) => {
            handleProjects(e);
            changeColor(e);
          }}
          value="django"
          className="single-category"
        >
          <span >DJANGO</span>
        </button>
      </div>
      <div className="row container d-flex justify-content-center m-auto card-container">
        {projects.map((item) => {
          return <Project key={item.id} {...item} />;
        })}
      </div>
    </div>
    <div className="switch">
          <label className="theme-switch" htmlFor="checkbox" id="round1">
            <input type="checkbox" id="checkbox" 
              onClick={changeTheme}
            />
             <div className="slider round">
              {
                theme=="light-theme" ?(
                  <img src="images/sun.png" alt="sun" className="sun"/>
                ):(
                  <img src="images/moon.png" alt="moon" className="moon"/>
                )
              }
          </div> 
          </label>
        </div>

    </>

  );
};

export default ProjectContainer;
