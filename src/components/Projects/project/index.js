import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
  return (
    <div className="project mt-5 mx-5">
      <a href={props.data.deployedLink} target="_blank">
        <img
          src={props.data.image}
          className="projectImage"
          alt={props.data.imageAlt}
        ></img>
      </a>
      <h5 className="text-center mt-3">{props.data.title}</h5>
      <p className="text-center text-secondary">{props.data.description}</p>
      <p className="text-center text-danger">{props.data.tech}</p>
      <div className="text-center d-flex justify-content-evenly">
        <a href={props.data.githubLink} target="_blank" className="projectLink">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href={props.data.deployedLink}
          target="_blank"
          className="projectLink"
        >
          <FontAwesomeIcon icon={faServer} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Project;
