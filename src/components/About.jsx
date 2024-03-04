import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen lg:h-1/2 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a front-end engineer who has experience building websites using React, and Next.js. I am passionate about learning and overcoming new challenges. Whether it's tackling solo projects or working with a team, I enjoy problem solving.
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
