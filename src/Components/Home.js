import React from "react";
import HeroImg from "../assets/nobg.png";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      name="hero"
      className="w-screen h-screen bg-gradient-to-b from-slate-950 to-gray-800 text-blue-500 px-10 md:px-32 py-8 mx-auto flex flex-col md:flex-row items-center justify-between"
      id="home"
    >
      <div className="flex flex-col items-center justify-center h-full px-4 md:ml-6 lg:ml-10 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p> Hi, I'm</p>
          <p className="text-white text-4xl font-signature my-2">Oyindamola</p>
          <h3 className="text-4xl sm:text-5xl font-bold font-heading mb-5 border-b-2 text-white border-indigo-600 pb-2">
            A Frontend Developer
          </h3>
          <p className="text-lg md:my-3 my-1 md:py-3 py-1 max-w-md">
            I love to work on web applicatons using technologies like
            JavaScript, ReactJs and Tailwind CSS.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group bg-blue-500 hover:bg-blue-900 text-white w-fit font-bold my-2 py-3 px-6 rounded flex items-center"
            >
              See Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-full w-[20rem] h-[20rem] lg:mr-[10rem]">
        <img
          src={HeroImg}
          alt="coding-illustration"
          className="rounded-full w-full h-full object-contain"
          // hover:shadow-[25px_25px_10px_-15px_rgba(255,255,255,0.3)]
        />
      </div>
    </section>
  );
}
