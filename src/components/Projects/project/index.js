import homepagetech from "../../../assets/images/homepagetech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

// const Project = () => {
//   return (
//     <div className="project mt-5">
//       <img
//         src={homepagetech}
//         className="projectImage"
//         alt="The tech blog"
//       ></img>
//       <h5 className="text-center mt-3">The Tech Blog</h5>
//       <p className="text-center text-secondary">
//         The Tech Blog is a full-stack MVC application that allows users to
//         create an account, login and logout, create, view, update, and delete
//         posts, and add comments to posts.
//       </p>
//       <p className="text-center text-danger">
//         Tech Used: Node.js, Express, jQuery, MySQL, Handlebars, bCrypt,
//         Bootstrap
//       </p>
//       <div className="text-center d-flex justify-content-evenly">
//         <a
//           href="https://github.com/Leon3005/tech-blog"
//           target="_blank"
//           className="projectLink"
//         >
//           <FontAwesomeIcon icon={faGithub} size="2x" />
//         </a>
//         <a
//           href="https://mighty-wildwood-56891.herokuapp.com/"
//           target="_blank"
//           className="projectLink"
//         >
//           <FontAwesomeIcon icon={faServer} size="2x" />
//         </a>
//       </div>
//     </div>
//   );
// };

const Project = (props) => {
  return (
    <div className="project mt-5">
      <img src={props.image} className="projectImage" alt="The tech blog"></img>
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
