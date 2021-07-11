const projects = [
  {
    title: "The Tech Blog",
    description:
      "The Tech Blog is a full-stack MVC application that allows users to create an account, login and logout, create, view, update, and delete posts, and add comments to posts. It utilises MySQL to store all user/post data and bCrypt to securely store passwords.",
    tech: "Tech Used: Node.js, Express, jQuery, MySQL, Handlebars, bCrypt, Bootstrap",
    image: "images/homepagetech.png",
    imageAlt: "Tech Blog",
    githubLink: "https://github.com/Leon3005/tech-blog",
    deployedLink: "https://mighty-wildwood-56891.herokuapp.com/",
  },
  {
    title: "Samplify",
    description:
      "Samplify is a front-end only application that interacts with 2 third-party API's, Youtube and Genius. It allows the user to search for a song via the Genius API and see the samples that were used in that song. It also generated embedded YouTube players for each sample. Local storage is used to add songs to favourites.",
    tech: "Tech Used: jQuery, Third-Party API's, Local Storage, Bulma, Swiper.JS",
    image: "images/samplify.png",
    imageAlt: "Samplify",
    githubLink: "https://github.com/Leon3005/samplify-uk",
    deployedLink: "https://leon3005.github.io/samplify-uk/",
  },
];

export default projects;
