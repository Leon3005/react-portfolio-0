import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
  return (
    <div className="project mt-5">
      <img
        src={props.image}
        className="projectImage"
        alt={props.imageAlt}
      ></img>
      <h5 className="text-center mt-3">{props.title}</h5>
      <p className="text-center text-secondary">{props.description}</p>
      <p className="text-center text-danger">{props.tech}</p>
      <div className="text-center d-flex justify-content-evenly">
        <a href={props.githubLink} target="_blank" className="projectLink">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href={props.deployedLink} target="_blank" className="projectLink">
          <FontAwesomeIcon icon={faServer} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Project;
