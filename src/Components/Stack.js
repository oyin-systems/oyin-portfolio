import React from "react";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/js.png";
import react from "../assets/tech/react.png";
import vue from "../assets/tech/vue.png";
import tailwind from "../assets/tech/tailwind.png";
import next from "../assets/tech/next.png";
import git from "../assets/tech/git.png";
import netlify from "../assets/tech/netlify.png";
import vercel from "../assets/tech/vercel.png";
import firebase from "../assets/tech/firebase.png";
import figma from "../assets/tech/figma.png";
import insomnia from "../assets/tech/insomnia.png";
import directus from "../assets/tech/directus.png";

export default function Stack() {
  const tech = [
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
      src: js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: vue,
      title: "VUE",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: next,
      title: "NEXT",
      style: "shadow-white",
    },
    {
      id: 8,
      src: git,
      title: "GIT",
      style: "shadow-[#ea580c]",
    },
    {
      id: 9,
      src: netlify,
      title: "NETLIFY",
      style: "shadow-[#5eead4]",
    },
    {
      id: 10,
      src: vercel,
      title: "VERCEL",
      style: "shadow-white",
    },
    {
      id: 11,
      src: firebase,
      title: "FIREBASE",
      style: "shadow-orange-500",
    },
    {
      id: 12,
      src: figma,
      title: "FIGMA",
      style: "shadow-[#4b5563]",
    },
    {
      id: 13,
      src: insomnia,
      title: "INSOMNIA",
      style: "shadow-[#8b5cf6]",
    },
    {
      id: 14,
      src: directus,
      title: "DIRECTUS",
      style: "shadow-[#8b5cf6]",
    },
  ];
  return (
    <section
      className="bg-gradient-to-b from-slate-950 to-gray-800 w-screen h-auto lg:h-screen text-blue-500 px-10 md:px-32 py-16"
      id="tech stack"
    >
      <div className="mx-auto p-4 flex flex-col justify-center w-full text-white">
        <h2 className="text-4xl text-white font-bold font-heading lg:mb-5 mb-6 border-b-2 w-[270px] border-indigo-600 pb-2">
          My Tech Stack
        </h2>
        <p className="text-base lg:text-xl text-justify mt-5 lg:mt-5 py-4">
          These are the technologies I've worked with:
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center py-8 sm:px-0">
        {tech.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg w-24 md:w-28 lg:w-32 ${style}`}
          >
            <img
              src={src}
              alt={title}
              className="w-15 h-10 mx-auto hover:rotate-180 duration-100"
            />
            <p className="mt-4 text-white text-sm md:text-lg font-semibold">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
