import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Juan Sebastián{" "}
              <span className="text-pink-400">(Juan or Juanse)</span>, nice to
              meet you.
            </p>
          </div>
          <div>
            <p>
              I am an argentinian{" "}
              <span className="text-pink-400">Full Stack Developer</span> who
              now lives in Spain. My interest in web development started back in
              2018 when I decided to start studying. I have developed many types
              of fullstack and frontend applications. My main focus is building
              minimal and accessible webs.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
