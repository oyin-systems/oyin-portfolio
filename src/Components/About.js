import React from "react";
// import AboutImg from "../assets/c.png";

export default function About() {
  return (
    <section
      className="w-screen h-screen bg-gradient-to-b from-gray-800 to-slate-950 text-blue-500 px-10 md:px-32 py-16"
      id="about"
    >
      <div className="mx-auto p-4 flex flex-col items-center justify-center md:justify-between w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl text-white font-bold font-heading lg:mb-5 mb-6 border-b-2 w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="text-base lg:text-xl text-justify mt-5 lg:mt-10">
            I am a frontend developer with a strong foundation in HTML, CSS and
            JavaScript. I have experience working with frameworks such as React,
            Vue, and Tailwind CSS. I understand how a web application works,
            from the user interface (UI) that the user sees and interacts with
            to the server-side logic.
          </p>
          <p className="text-base lg:text-xl text-justify mt-3 lg:mt-5">
            I also have a good experience in Technical writing, by simplifying
            complex programming concepts into simple understandable terms. I
            have experience working with version control systems like Git.
          </p>
          <p className="text-base lg:text-xl text-justify mt-3 lg:mt-5">
            In addition to technical skills, I have excellent problem-solving
            abilities, strong communication skills, and the ability to work well
            in a team environment. I can take a project from concept to
            completion and adapt to new technologies and methodologies as
            needed.
          </p>
        </div>

        {/* <div className="about-img">
          <img
            src={AboutImg}
            alt="profile-picture"
            className="lgw-[80%] md:ml-auto rounded-full"
          />
        </div> */}
      </div>
    </section>
  );
}
