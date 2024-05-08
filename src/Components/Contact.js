import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <section
      className="w-screen bg-gradient-to-b from-gray-800 to-slate-950 text-blue-500 px-10 md:px-32 py-16"
      id="contact"
    >
      <div className="pb-8">
        <h2 className="text-4xl text-white font-bold font-heading lg:mb-5 mb-6 lg:mt-8 border-b-2 w-[220px] border-indigo-600 pb-2">
          Contact Me
        </h2>
      </div>

      <div className="flex flex-col text-center justify-center items-center">
        <p className="text-xl font-semibold pb-8 text-center">
          I am currently open to full-time, contract or part-time opportunities
          in Front End Development.
        </p>

        <p className="text-white text-lg">Have an awesome project idea?</p>
        <p className="mb-4">Let's Discuss.</p>

        <div className="text-white">
          <div className="flex gap-4 py-4">
            <FaPhone size={20} className="text-white" />
            <p>+234 810 328 6788</p>
          </div>
          <div className="flex gap-4 py-4">
            <HiOutlineMail size={25} className="text-white" />
            <p>oyinbolaji05@gmail.com</p>
          </div>
          <div className="flex gap-4 py-4">
            <MdLocationOn size={25} className="text-white" />
            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
