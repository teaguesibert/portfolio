import React from "react";
import saltX from "../assets/portfolio/salt-menu1.jpg";
import mathGame from "../assets/portfolio/mathgamets.png";
import trailerCompany from "../assets/portfolio/trailer-company.png";
import spotifyRemote from "../assets/portfolio/spotify-remote.png";
import movieSearch from "../assets/portfolio/moviesearchts.jpg";
import portfolio from "../assets/portfolio/html-portfolio.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spotifyRemote,
      demo: 'https://www.youtube.com/watch?v=VzeghVTIGGE',
      code: 'https://github.com/teaguesibert/spotify-remote-player-tailwind',
    },
    {
      id: 2,
      src: movieSearch,
      demo: 'https://moviesearchts.netlify.app/',
      code: 'https://github.com/teaguesibert/movie-search',
    },
    {
      id: 3,
      src: saltX,
      demo: 'https://onionknight.itch.io/salt-x',
      code: 'https://onionknight.itch.io/salt-x',
    },
    {
      id: 4,
      src: trailerCompany,
      demo: 'https://trailer-company.netlify.app/',
      code: 'https://github.com/teaguesibert/trailer-company-site',
    },
    {
      id: 5,
      src: portfolio,
      demo: 'https://html-portfolio-ts.netlify.app/',
      code: 'https://github.com/teaguesibert/portfolio-html',
    },
    {
      id: 6,
      src: mathGame,
      demo: 'https://tensecondmathgamets.netlify.app/',
      code: 'https://github.com/teaguesibert/10secmathgame',
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
          <p className="py-6">Check out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400 text-center" href={demo} rel="noopener noreferrer" target="_blank">
                  Demo
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400 text-center" href={code} rel="noopener noreferrer" target="_blank">
                  Code
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
