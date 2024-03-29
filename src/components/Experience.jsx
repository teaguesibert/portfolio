import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import dynamicCert from "../assets/dynamicwebcert.png";
import nextJs from "../assets/nextjs.png"
import nodeJs from "../assets/node.png"


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: nextJs,
      title: "Next.js",
      style: "shadow-gray-300",
    },
    {
      id: 8,
      src: nodeJs,
      title: "Next.js",
      style: "shadow-lime-400",
    },
    
    
  ];

  const certs = [
    {
      id: 1,
      src: dynamicCert,
      title: "HTML CSS Development",
      style: "shadow-blue-400",
      link: "https://www.altcademy.com/@teaguesibert/certificate/webdesignium",
    },
    {
      id: 2,
      src: dynamicCert,
      title: "JavaScript Programming",
      style: "shadow-blue-400",
      link: "https://www.altcademy.com/@teaguesibert/certificate/javascriptium",
    },
    {
      id: 3,
      src: dynamicCert,
      title: "Dynamic Website Development",
      style: "shadow-blue-400",
      link: "https://www.altcademy.com/@teaguesibert/certificate/jqueryium",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto px-4 pt-36 pb-24 sm:pt-4 sm:pb-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2  gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div className="max-w-screen-lg mx-auto px-4 pt-36 pb-24 sm:pt-4 sm:pb-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Certificates
          </p>
          <p className="py-6">I have certificates for the following:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {certs.map(({ id, src, title, style, link }) => (
            <a
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              href={link}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-xs sm:text-base">{title}</p>
            </a>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
