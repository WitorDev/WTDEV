import React from "react";
import projectImage from '/images/project-img.jpg';
import {
  FaArrowDown,
  FaBatteryEmpty,
  FaEye,
  FaGithub,
  FaGithubAlt,
  FaTools,
} from "react-icons/fa";
import {
  SiApifox,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGimp,
  SiHtml5,
  SiIcon,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
const projects = [
  {
    title: "Todo App",
    description: "A simple and efficient task manager built with React.",
    tech: ["Javascript", "HTML", "CSS", "React", "Tailwind"],
    image: "https://picsum.photos/400/250?random=1",
    link: "#",
    repo: "https://github.com/username/todo-app",
    date: "2023-01-01",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills.",
    tech: ["Javascript", "HTML", "CSS", "React", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/400/250?random=2",
    link: "#",
    repo: "https://github.com/username/portfolio-website",
    date: "2023-02-01",
  },
  {
    title: "Weather App",
    description: "A real-time weather app using OpenWeather API.",
    tech: ["Javascript", "HTML", "CSS", "React", "API", "CSS"],
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
    repo: "https://github.com/username/weather-app",
    date: "2023-03-01",
  },
  {
    title: "Weather App",
    description: "A real-time weather app using OpenWeather API.",
    tech: ["Javascript", "HTML", "CSS", "React"],
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
    repo: "https://github.com/username/weather-app",
    date: "2023-03-01",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-screen-xl px-10 mx-auto mb-20">
      <div className="flex items-center gap-4 mb-20">
        <div className="border-t-2 w-full h-1"></div>
        <h1 className="text-xl min-w-fit">Projects</h1>
        <div className="border-t-2 w-full h-1"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border-t-2 border-t-green-500 bg-black/60 backdrop-blur-xl text-gray-100 duration-300"
          >
            <a
              href={project.link}
              className="text-blue-400 hover:underline text-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            </a>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <div>
                  <p className="text-sm text-gray-400">{project.date}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.link}>
                  <button className="flex gap-2 items-center  hover:text-white hover:border-white w-full h-full border text-green-500 border-green-500 py-1 px-2">
                    <FaEye /> View
                  </button>
                </a>
                <a href={project.repo}>
                  <button className="flex gap-2 items-center hover:text-white hover:border-white  w-full h-full border text-green-500 border-green-500 py-1 px-2">
                    <FaGithubAlt /> Github
                  </button>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => {
                  let Icon;
                  switch (tech) {
                    case "Javascript":
                      Icon = SiJavascript;
                      break;
                    case "CSS":
                      Icon = SiCss3;
                      break;
                    case "HTML":
                      Icon = SiHtml5;
                      break;
                    case "Node":
                      Icon = SiNodedotjs;
                      break;
                    case "Express":
                      Icon = SiExpress;
                      break;
                    case "MongoDB":
                      Icon = SiMongodb;
                      break;
                    case "Mongoose":
                      Icon = SiMongoose;
                      break;
                    case "Tailwind":
                      Icon = SiTailwindcss; // Replace with the appropriate Tailwind icon if available
                      break;
                    case "React":
                      Icon = SiReact; // Replace with the appropriate Vite icon if available
                      break;
                    case "Framer Motion":
                      Icon = SiFramer; // Replace with the appropriate Vite icon if available
                      break;
                    default:
                      Icon = null;
                  }
                  if (Icon) {
                    return <Icon size={30} key={index} />;
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-1/2 left-0 top-[175vh] -z-10">
              <img className='w-full h-full object-cover' src={projectImage} alt="Hero Image" />
              <div className="backdrop-blur-xs absolute inset-0 bg-gradient-to-r from-transparent to-midnight"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>
      </div>
    </section>
  );
}
