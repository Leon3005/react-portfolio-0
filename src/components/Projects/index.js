import homepagetech from "../../assets/images/homepagetech.png";
import Project from "./project";

const Projects = () => {
  return (
    <div>
      <h1 className="text-center" id="projectHeading">
        projects
      </h1>
      <div className="projects d-flex justify-content-evenly">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
