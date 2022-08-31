import Project from "./Project";

const ProjectContainer = ({ projects, handleProjects }) => {
  // console.log(projects);

const changeColor=(a)=>{
   let items = document.querySelectorAll('.single-category.active-category');
  if(items.length) 
  {
      items[0].className = 'single-category';
  }
  a.target.className = 'single-category active-category';
  }
 


  return (
    <div className="row container m-auto">
      <div className="buttons d-flex justify-content-center align-items-center gap-2 mb-5 mt-2 py-1 flex-wrap">
        <button onClick={(e)=>{handleProjects(e);changeColor(e);}} value="all" className="single-category active-category">ALL</button>
        <button onClick={(e)=>{handleProjects(e);changeColor(e);}} value="react" className="single-category">REACT</button>
        <button onClick={(e)=>{handleProjects(e);changeColor(e);}} value="javascript" className="single-category">JAVASCRIPT</button>
        <button onClick={(e)=>{handleProjects(e);changeColor(e);}} value="css" className="single-category">CSS</button>
      </div>
      <div className="row container d-flex justify-content-center m-auto card-container">
        {projects.map((item) => {
          return <Project key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProjectContainer;
