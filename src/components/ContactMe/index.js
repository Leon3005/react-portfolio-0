import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <div className="container-fluid mt-5 pt-5" id="contactMe">
      <div>
        <h1 className="text-center mb-3 p-3">contact me</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center text-center contactMeContainer">
        <p className="text-center mt-5 pt-5 w-50 contactMeText">
          If you have any queries that could be of interest or would like to
          find out more, please feel free to contact me or check out some of my
          platforms below:
          <div className="d-flex justify-content-evenly mt-5">
            <a href="https://github.com/Leon3005" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/leon-wheeler/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:leonwheeler08@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vQxi7gTHxit3QcVQ-h54v8W2_LRV-ZLDvyYVhNyHcHeBB69_MI0M1SqhlOYBRsErA/pub"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
