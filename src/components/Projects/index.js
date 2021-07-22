import { v4 as uuidv4 } from "uuid";

import Project from "./project";
import projects from "../../assets/projectData";

const Projects = () => {
  const renderProjects = () => {
    return projects.map((project) => {
      return <Project data={project} key={uuidv4()} />;
    });
  };

  return (
    <div className="container-fluid mb-4" id="projects">
      <div id="projectHeading">
        <h1 className="text-center">projects</h1>
      </div>
      <div className="projects d-flex justify-content-evenly flex-wrap">
        {renderProjects()}
      </div>
    </div>
  );
};

export default Projects;
