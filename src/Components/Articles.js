import React from "react";
import counter from "../assets/articles/counter.png";
import january from "../assets/articles/january.png";
import february from "../assets/articles/february.png";
import march from "../assets/articles/march.png";
import april from "../assets/articles/april.png";

export default function Articles() {
  const articles = [
    {
      id: 1,
      src: counter,
      read: "https://oyinabolaji.hashnode.dev/how-to-build-a-counter-application-using-usereducer-and-custom-hooks-in-reactjs",
    },
    {
      id: 2,
      src: january,
      read: "https://oyinabolaji.hashnode.dev/working-together-reflections-on-combining-presentation-and-application-tasks",
    },
    {
      id: 3,
      src: february,
      read: "https://oyinabolaji.hashnode.dev/reflecting-on-february-exploring-shopify-htmlcss-and-project-management",
    },
    {
      id: 4,
      src: march,
      read: "https://oyinabolaji.hashnode.dev/march-reflections",
    },
    {
      id: 5,
      src: april,
      read: "https://oyinabolaji.hashnode.dev/april",
    },
  ];

  return (
    <section
      className="w-screen bg-gradient-to-b from-gray-800 to-slate-950 text-blue-500 px-10 md:px-32 py-16"
      id="blogs"
    >
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl text-white font-bold font-heading lg:mb-5 mb-6 border-b-2 w-[160px] border-indigo-600 pb-2">
            Articles
          </h2>
          <p className="text-base lg:text-xl text-justify mt-5 lg:mt-5 py-4">
            These are some of my articles. Check them out:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {articles.map(({ id, src, read }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="shoes-website"
                className="rounded-md duration-200 hover:scale-105 w-full h-2/3"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-blue-300 rounded-md hover:text-black hover:font-bold"
                  onClick={() => window.open(read, "_blank")}
                >
                  View Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
