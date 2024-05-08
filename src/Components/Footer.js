import React from "react";
import { Link } from "react-scroll";
import { MdArrowRightAlt } from "react-icons/md";

export default function Footer() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-slate-950 w-screen h-30 px-5 py-4 flex flex-col justify-center items-center text-center md:flex-row lg:justify-between">
      <p className="text-white font-semibold text-sm md:text-base">
        Copyright &copy; 2024. OyinAbolaji. All Rights Reserved.
      </p>
      <Link
        to="home"
        smooth
        duration={500}
        className="group text-white text-center w-fit font-bold my-2 py-3 px-6 rounded flex items-center"
      >
        Scroll to top
        <span className="group-hover:-rotate-90 duration-300">
          <MdArrowRightAlt size={25} className="ml-1" />
        </span>
      </Link>
    </section>
  );
}
