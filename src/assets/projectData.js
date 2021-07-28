const projects = [
  {
    title: "tri-via-hub",
    description:
      "tri-via-hub is a full-stack MVC application that stores user login information, quizzes, and quiz scores to a database. The user can log in/sign up to play or create a quiz, which can also be done by generating questions based on category from a third-party API.",
    tech: "Tech Used: Node.js, Express, jQuery, MySQL, Handlebars, bCrypt, Open Trivia DB API, Bootstrap",
    image: "images/tri-via-hub.png",
    imageAlt: "tri-via-hub",
    githubLink: "https://github.com/Leon3005/tri-via-hub",
    deployedLink: "https://tri-via-hub.herokuapp.com/",
  },

  {
    title: "React LW Radio",
    description:
      "LW Radio is a full-stack React application that allows users to listen to songs with a control panel to play, pause, skip forwards, and skip backwards. It also allows users to request songs by using the 'Request a song' button in the library. This sends a POST request to another deployed Heroku server. The song audio files were uploaded and stored to Amazon S3.",
    tech: "Tech Used: React, Node.js, Express, jQuery, MongoDB, Mongoose, Axios, Sass, Amazon S3",
    image: "images/lwradio.png",
    imageAlt: "LW Radio",
    githubLink: "https://github.com/Leon3005/music-player",
    deployedLink: "https://lw-music-player.herokuapp.com/",
  },

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
    tech: "Tech Used: jQuery, Genius & Youtube API's, Local Storage, Bulma, Swiper.JS",
    image: "images/samplify.png",
    imageAlt: "Samplify",
    githubLink: "https://github.com/Leon3005/samplify-uk",
    deployedLink: "https://leon3005.github.io/samplify-uk/",
  },

  {
    title: "React Weather Dashboard",
    description:
      "The Weather Dashboard allows users to retrieve current weather data and the forecast for the next five days in a searched city. It uses React for rendering, Bootstrap for styling, and the Open Weather Map API for data.",
    tech: "Tech Used: React, Bootstrap, Open Weather Map API, Axios",
    image: "images/weather.png",
    imageAlt: "Weather Dashboard",
    githubLink: "https://github.com/Leon3005/react-weather-dashboard",
    deployedLink: "https://lw-weather-dashboard.herokuapp.com/",
  },
];

export default projects;
