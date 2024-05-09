import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} className="text-white" />
        </>
      ),
      href: "https://www.linkedin.com/in/oyindamola-abolaji-aba572224/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} className="text-white" />
        </>
      ),
      href: "https://github.com/oyin-systems",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={25} className="text-white" />
        </>
      ),
      href: "mailto:oyinbolaji05@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <RiTwitterXFill size={25} className="text-white" />
        </>
      ),
      href: "https://twitter.com/Oyindamolaaaa_",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} className="text-white" />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed text-white">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-slate-950" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-pink"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
