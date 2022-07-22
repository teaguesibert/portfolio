import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a front-end engineer who has experience building websites using HTML, CSS, JavaScript, React, and Tailwind. I am passionate about learning and overcoming new challenges. In addition to being an agile learner, I enjoy working with a team in fast-paced environments.
        </p>

        <br />

        <p className="text-xl">
        In my spare time, you can find me hanging out with my wife and dogs, working on a game or project with friends, or hiking and exploring North Georgia!
        </p>
      </div>
    </div>
  );
};

export default About;
