import Project from "./Project";

const ProjectContainer = ({ projects, handleProjects }) => {
  // console.log(projects);

  return (
    <div className="row container m-auto">
      <div className="buttons d-flex justify-content-center align-items-center gap-2 mb-5 mt-2 py-1 flex-wrap">
        <button onClick={handleProjects} value="all" className="p-1 rounded-3 all fw-bold border-0">ALL</button>
        <button onClick={handleProjects} value="react" className="p-1 rounded-3 fw-bold border-0">REACT</button>
        <button onClick={handleProjects} value="javascript" className="p-1 rounded-3 fw-bold border-0">JAVASCRIPT</button>
        <button onClick={handleProjects} value="css" className="p-1 rounded-3 fw-bold border-0">CSS</button>
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
