import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const {theme,setTheme,changeTheme}=useContext(DataContext)
  return (
    <div className="home d-flex justify-content-center align-items-center flex-column">
      <div className="container m-auto col-9 homeContainer">
        {/* <h3 className="text-danger mt-5 h-6">Hi My name is</h3> */}
        <h2 className="text-light fullName">Mehmet Çakır</h2>
        <h2 className="text-light frondEnd">I'm a Front-End Developer</h2>
        <h5 className="text-light desc">
          I’m a Frond-End Developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive
          web applications.
        </h5>
        {theme==="dark-theme" && (
                  <div className="d-flex justify-content-between">
                  <div className="bubble"></div>
             <div className="bubble"></div>
             <div className="bubble"></div>
             <div className="bubble"></div>
             <div className="bubble"></div>
             <div className="bubble"></div>
             <div className="bubble"></div>
             <div className="bubble"></div>
             <div className="bubble"></div>
           </div>
        )}
        </div>
        {
        theme==="dark-theme" && (
          <img src="images/wave.svg" alt="wave"className="wave" />
        )
}
  
        
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
      </div>

  );
};

export default Home;
