import Project from "./project";
import projects from "../../assets/projectData";

const Projects = () => {
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Project
          title={project.title}
          description={project.description}
          tech={project.tech}
          image={project.image}
          imageAlt={project.imageAlt}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      );
    });
  };

  return (
    <div className="container-fluid">
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
