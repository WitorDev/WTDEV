import React from "react";

const projects = [
  {
    title: "Todo App",
    description: "A simple and efficient task manager built with React.",
    tech: ["React", "Tailwind", "Vite"],
    image: "https://picsum.photos/400/250?random=1",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/400/250?random=2",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A real-time weather app using OpenWeather API.",
    tech: ["React", "API", "CSS"],
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A real-time weather app using OpenWeather API.",
    tech: ["React", "API", "CSS"],
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
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
            className="p-4 border-t-2 border-t-green-500 shadow-md bg-black/60 backdrop-blur-xl text-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col gap-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-blue-400 hover:underline text-sm"
              >
                View Project →
              </a>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium bg-green-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
