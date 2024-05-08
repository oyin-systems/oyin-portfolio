import React from "react";
import portfolio from "../assets/projects/portfolio.png";
import shoes from "../assets/projects/shoes.png";
import weather from "../assets/projects/weather.png";
import repo from "../assets/projects/repo.png";
import counter from "../assets/projects/counter.png";
import calculator from "../assets/projects/calculator.png";
import google from "../assets/projects/google.png";
import remote from "../assets/projects/remote.png";
import music from "../assets/projects/music.png";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: portfolio,
      hosted: "https://e-commerce-taupe-six.vercel.app/",
      live: "https://github.com/oyin-systems/oyin-portfolio",
      stack: "React, Tailwind CSS",
    },
    {
      id: 2,
      src: shoes,
      hosted: "https://e-commerce-taupe-six.vercel.app/",
      live: "https://github.com/oyin-systems/e-commerce",
      stack: "NextJS, Tailwind CSS",
    },
    {
      id: 3,
      src: weather,
      hosted: "https://boisterous-axolotl-5947c5.netlify.app/",
      live: "https://github.com/oyin-systems/Weather-app",
      stack: "HTML, CSS, JavaScript",
    },
    {
      id: 4,
      src: repo,
      hosted: "https://github-repo-pi.vercel.app/",
      live: "https://github.com/oyin-systems/Github-repo",
      stack: "VueJS, TailwindCSS",
    },
    {
      id: 5,
      src: counter,
      hosted: "https://vue-counter-3rd.netlify.app/",
      live: "https://github.com/oyin-systems/vue-counter",
      stack: "VueJS, TailwindCSS",
    },
    {
      id: 6,
      src: calculator,
      hosted: "https://vermillion-maamoul-86bca5.netlify.app/",
      live: "https://github.com/oyin-systems/deployment_calculator",
      stack: "HTML, CSS, JavaScript",
    },
    {
      id: 7,
      src: google,
      hosted: "https://oyin-systems.github.io/Google-replica/",
      live: "https://github.com/oyin-systems/Google-replica",
      stack: "HTML, CSS",
    },
    {
      id: 8,
      src: remote,
      hosted: "https://oyin-systems.github.io/Remote-work/",
      live: "https://github.com/oyin-systems/Remote-work",
      stack: "HTML, CSS",
    },
    {
      id: 9,
      src: music,
      hosted: "https://oyin-systems.github.io/Music-website/",
      live: "https://github.com/oyin-systems/Music-website",
      stack: "HTML, CSS",
    },
  ];

  return (
    <section
      className="w-screen bg-gradient-to-b from-slate-950 to-gray-800 text-white px-10 md:px-32 py-16"
      id="projects"
    >
      <div className=" p-4 mx-auto flex flex-col justify-center items-center text-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl text-white font-bold font-heading lg:mb-5 mb-6 border-b-2 w-[160px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="text-base lg:text-xl text-justify mt-5 lg:mt-5 py-4">
            These are some of my projects. I have built these with different
            technologies like HTML, CSS, JavaScript, React and Vue. Check them
            out:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {projects.map(({ id, src, hosted, live, stack }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="shoes-website"
                className="rounded-md duration-200 hover:scale-105 w-full h-2/3"
              />

              <p className="mt-4">Tech Stack: {stack}</p>

              <div className="flex items-center justify-center">
                <button
                  className="flex gap-2 w-fit px-6 py-3 mx-4 my-1 duration-200 hover:scale-105 hover:bg-blue-300 rounded-md hover:text-black hover:font-bold"
                  onClick={() => window.open(hosted, "_blank")}
                >
                  <FaLink size={25} /> Demo
                </button>

                <button
                  className="flex gap-2 w-fit px-6 py-3 mx-4 my-1 duration-200 hover:scale-105 hover:bg-blue-300 rounded-md hover:text-black hover:font-bold"
                  onClick={() => window.open(live, "_blank")}
                >
                  <FaGithub size={25} />
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
