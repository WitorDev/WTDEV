// Import images from assets folder
import jsImage from "../assets/javascript.png";
import unifilPortfolio from "../assets/unifilPortfolio.png";
import barrelOrganization from "../assets/barrelOrganization.png";
import symbionSolutions from "../assets/symbionSolutions.png";
import bleedOut from "../assets/bleedOut.png";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import reactImage from "../assets/react.png";
import tailwindImage from "../assets/css.png";
import nodeImage from "../assets/mongodb.png";
import expressImage from "../assets/mongodb.png";
import mongodbImage from "../assets/mongodb.png";
import mongooseImage from "../assets/mongodb.png";

const projects = [
  {
    title: "Portfolio Unifil",
    description: "A portfolio website showcasing projects and studies on Computer Science at Unifil. Built with Node.js and EJS views.",
    tech: ["Javascript", "EJS", "CSS", "Node", "Express"],
    image: unifilPortfolio,
    link: "https://portfolio-unifil.onrender.com/",
    repo: "https://github.com/witortenadev/Portfolio-Unifil",
    date: "jul 3 2025",
  },
  {
    title: "Barrel Organization",
    description: "A self-defense teaching facility focused on teaching urban survival and other skills.",
    tech: ["Javascript", "HTML", "CSS", "Tailwind", "React", "Framer Motion"],
    image: barrelOrganization,
    link: "https://barrelorganization.netlify.app/home",
    repo: "https://github.com/WitorDev/barrel_org",
    date: "feb 10 2025",
  },
  {
    title: "Symbion Solutions",
    description: "A B2B company specializing in software development, IT consulting, and digital transformation.",
    tech: ["Javascript", "HTML", "CSS", "Tailwind", "React", "Framer Motion"],
    image: symbionSolutions,
    link: "https://symbion.netlify.app",
    repo: "https://github.com/WitorDev/Symbion/tree/master",
    date: "feb 21 2025",
  },
  {
    title: "Note Taker",
    description: "A simple and efficient task manager built with Vanilla WEB (JS, HTML and CSS).",
    tech: ["Javascript", "HTML", "CSS"],
    image: jsImage,
    link: "https://witordev.github.io/Note-Taker/",
    repo: "https://github.com/WitorDev/Note-Taker",
    date: "sep 8 2024",
  },
  {
    title: "BleedOUT",
    description: "A 2D top-down shooter game where you must advance to the top of the map. Developed using GDScript in the Godot Engine.",
    tech: ["GDScript", "Godot"],
    image: bleedOut,
    link: "https://witordev.github.io/BleedOUT/",
    repo: "https://github.com/WitorDev/BleedOUT",
    date: "jan 25 2025",
  },
];

export { projects };