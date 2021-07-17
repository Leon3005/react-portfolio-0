const AboutMe = () => {
  return (
    <div className="container-fluid mt-5" id="aboutMe">
      <div>
        <h1 className="text-center mb-3 p-3">about me</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center text-center aboutMeContainer">
        <p className="text-center mt-2 me-5 w-50 aboutMeText">
          Hi! I'm Leon, a full-stack web developer based in Birmingham. I'm
          currently working as an IT engineer and looking for my first
          opportunity in the software engineering sector.
          <br />I am passionate about all things tech and have been working on
          some of my first projects, as you can see above. I started my web
          development journey nearly 6 months ago, and all of my progress can be
          found via my GitHub in the 'Contact Me' section!
        </p>
        <img
          className="ms-5"
          src="https://media-exp3.licdn.com/dms/image/C4E03AQFkiTg1QEdJSQ/profile-displayphoto-shrink_200_200/0/1620161864949?e=1631750400&v=beta&t=KTtBcSphj9pSFV_D45hpitljc19uxfFJkwHx-HhWgmo"
        />
      </div>
    </div>
  );
};

export default AboutMe;
