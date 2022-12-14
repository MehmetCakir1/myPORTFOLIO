import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Skills = () => {
  const {theme,setTheme,changeTheme}=useContext(DataContext)

  return (
    <> 
    <div className=" d-flex align-items-center justify-content-center mt-md-5 skills-main-div">
      <article className="skillDiv row container mt-md-2  m-auto col-8 gap-2 d-flex align-items-center justify-content-center">
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/html.png" alt="html" />
          </div>
          <div className="title text-light fs-5">HTML</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/css.png" alt="css" />
          </div>
          <div className="title text-light fs-5">CSS</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/js.png" alt="js" />
          </div>
          <div className="title text-light fs-5">JavaScript</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/typescript.png" alt="ts" />
          </div>
          <div className="title text-light fs-5">TypeScript</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/react.png" alt="react" />
          </div>
          <div className="title text-light fs-5">REACT</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/bootstrap5.png" alt="bootstrap" />
          </div>
          <div className="title text-light fs-5">BOOTSTRAP</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/materialui.png" alt="mui" />
          </div>
          <div className="title text-light fs-5">MUI</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/sass.png" alt="sass" />
          </div>
          <div className="title text-light fs-5">SASS</div>
        </div>
        <div className="skill tailwind d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/tailwind.png" alt="tailwind" />
          </div>
          <div className="title text-light fs-5 ">TAILWIND</div>
        </div>
        <div className="skill git d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/git.png" alt="git" />
          </div>
          <div className="title text-light fs-5">GIT</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/github.png" alt="github" />
          </div>
          <div className="title text-light fs-5">GITHUB</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/jira.png" alt="jira" />
          </div>
          <div className="title text-light fs-5">JIRA</div>
        </div>
        <div className="skill d-flex flex-column col-sm-6 col-md-4 col-lg-3 align-items-center justify-content-between py-1">
          <div className="image d-flex align-items-center justify-content-center">
            {" "}
            <img src="images/django.png" alt="django" />
          </div>
          <div className="title text-light fs-5">DJANGO</div>
        </div>
      </article>
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

export default Skills;
