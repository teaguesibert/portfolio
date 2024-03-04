import React from "react";
import saltX from "../assets/portfolio/salt-menu1.jpg";
import mathGame from "../assets/portfolio/mathgamets.png";
import trailerCompany from "../assets/portfolio/sail-trailers.png";
import spotifyRemote from "../assets/portfolio/spotify-remote.png";
import movieSearch from "../assets/portfolio/moviesearchts.jpg";
import portfolio from "../assets/portfolio/html-portfolio.jpg"
import lyricCloud from "../assets/portfolio/lyric-cloud.png"
import taskFire from "../assets/portfolio/taskfire-login.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: lyricCloud,
      title:'Lyric-Cloud',
      demo: 'https://lyric-cloud.vercel.app/',
      github: 'https://github.com/teaguesibert/spotify-lyric-cloud',
    },
    {
      id: 2,
      src: taskFire,
      title:'TaskFire',
      demo: 'https://taskfire.jamesellerbee.com/',
      github: 'https://github.com/teaguesibert/TaskFire',
    },
    {
      id: 3,
      src: saltX,
      title:'Godot Gamejam Game',
      demo: 'https://onionknight.itch.io/salt-x',
      github: 'https://onionknight.itch.io/salt-x',
    },
    {
      id: 4,
      src: trailerCompany,
      title:'Sail Trailers',
      demo: 'https://sailtrailers.com/',
      github: '',
    },
    {
      id: 5,
      src: movieSearch,
      title:'Movie Search Tool',
      demo: 'https://moviesearchts.netlify.app/',
      github: 'https://github.com/teaguesibert/movie-search',
    },
    {
      id: 6,
      src: spotifyRemote,
      title:'Spotify Remote Player',
      demo: 'https://www.youtube.com/watch?v=VzeghVTIGGE',
      github: 'https://github.com/teaguesibert/spotify-remote-player-tailwind',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github, demo, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="pt-2 text-white text-large text-center">{title}</div>
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400 text-center" href={demo} rel="noopener noreferrer" target="_blank">
                  Deployed
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400 text-center" href={github} rel="noopener noreferrer" target="_blank">
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
