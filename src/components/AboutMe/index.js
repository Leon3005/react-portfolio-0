import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faJs,
  faCss3,
  faNodeJs,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <div className="container-fluid mt-5 pt-5" id="aboutMe">
      <div>
        <h1 className="text-center mb-3 p-3">about me</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center text-center aboutMeContainer">
        <span className="text-center mt-5 pt-5 w-50 aboutMeText">
          Hi! I'm Leon, a full-stack web developer with a focus on the MERN
          stack, based in Birmingham. I'm currently working as an IT engineer
          and looking for my first opportunity in the software engineering
          sector.
          <br />I am passionate about all things tech and have been working on
          some of my first projects, as you can see above. I started my web
          development journey nearly 6 months ago, and all of my progress can be
          found via my GitHub in the 'Contact Me' section!
          <br />
          Here are some of the technologies I have learnt so far:
          <div className="d-flex justify-content-evenly mt-4">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              <FontAwesomeIcon icon={faCss3} size="2x" />
            </a>
            <a href="https://www.javascript.com/" target="_blank">
              <FontAwesomeIcon icon={faJs} size="2x" />
            </a>
            <a href="https://nodejs.org/en/" target="_blank">
              <FontAwesomeIcon icon={faNodeJs} size="2x" />
            </a>
            <a
              href="https://www.mysql.com/"
              target="_blank"
              className="projectLink"
            >
              <FontAwesomeIcon icon={faDatabase} size="2x" />
            </a>
            <a href="https://expressjs.com/" target="_blank">
              <FontAwesomeIcon icon={faServer} size="2x" />
            </a>
          </div>
          <br />
          And here are some you can expect to see me using in the future:
          <div className="d-flex justify-content-evenly mt-4">
            <a href="https://reactjs.org/" target="_blank">
              <FontAwesomeIcon icon={faReact} size="2x" />
            </a>
            <a href="https://www.mongodb.com/" target="_blank">
              <FontAwesomeIcon icon={faDatabase} size="2x" />
            </a>
            <a href="https://aws.amazon.com/" target="_blank">
              <FontAwesomeIcon icon={faAws} size="2x" />
            </a>
          </div>
        </span>
        <img
          className="ms-5"
          src="https://media-exp3.licdn.com/dms/image/C4E03AQFkiTg1QEdJSQ/profile-displayphoto-shrink_200_200/0/1620161864949?e=1631750400&v=beta&t=KTtBcSphj9pSFV_D45hpitljc19uxfFJkwHx-HhWgmo"
        />
      </div>
    </div>
  );
};

export default AboutMe;
