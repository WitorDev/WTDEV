import { useState } from "react";

import { FaDotCircle, FaGithub, FaLink } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiReact,
  SiMongoose,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiThreedotjs,
} from "react-icons/si";

// Import images from assets folder
import jsImage from "../assets/javascript.png";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import reactImage from "../assets/react.png";
import tailwindImage from "../assets/css.png";
import nodeImage from "../assets/mongodb.png";
import expressImage from "../assets/mongodb.png";
import mongodbImage from "../assets/mongodb.png";
import mongooseImage from "../assets/mongodb.png";
import barrelImage from "../assets/barrelOrganization.png";
import unifilImage from "../assets/unifilPortfolio.png";


export default function Tech() {
  const [techActive, setTechActive] = useState(0);
  let techParagraph = "";
  let techTitle = "";
  let examplePhoto = "";
  let link = "";
  let repository = "";

  switch (techActive) {
    case 0:
      techTitle = "JavaScript";
      techParagraph =
        "JavaScript is a versatile programming language commonly used in web development.";
      examplePhoto = jsImage;
      link = "https://witordev.github.io/Note-Taker/";
      repository = "https://github.com/witordev/Note-Taker";
      break;
    case 1:
      techTitle = "JavaScript";
      techParagraph =
        "JavaScript is a versatile programming language commonly used in web development.";
      examplePhoto = jsImage;
      link = "https://witordev.github.io/Note-Taker/";
      repository = "https://github.com/witordev/Note-Taker";
      break;
    case 2:
      techTitle = "HTML5";
      techParagraph =
        "HTML5 is the latest version of the HyperText Markup Language, the standard for structuring web content.";
      examplePhoto = htmlImage;
      link = "https://witordev.github.io/Projeto-Agrinho/";
      repository = "https://github.com/witordev/Projeto-Agrinho";
      break;
    case 3:
      techTitle = "CSS3";
      techParagraph =
        "CSS3 is the latest evolution of the Cascading Style Sheets language, used to style web pages.";
      examplePhoto = cssImage;
      link = "https://witordev.github.io/Blog-preview-card/";
      repository = "https://github.com/witordev/Blog-preview-card";
      break;
    case 4:
      techTitle = "React";
      techParagraph =
        "React is a JavaScript library for building user interfaces, maintained by Facebook.";
      examplePhoto = reactImage;
      link = "https://symbion.netlify.app/";
      repository = "https://github.com/WitorDev/ReactTemplates/tree/master";
      break;
    case 5:
      techTitle = "Tailwind CSS";
      techParagraph =
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.";
      examplePhoto = barrelImage;
      link = "https://barrelorganization.netlify.app/home";
      repository = "https://github.com/WitorDev/barrel_org";
      break;
    case 6:
      techTitle = "Node.js";
      techParagraph =
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, used for server-side development.";
      examplePhoto = nodeImage;
      link = "https://genesisblog.onrender.com/";
      repository = "https://github.com/WitorDev/Blog_backend";
      break;
    case 7:
      techTitle = "Express";
      techParagraph =
        "Express is a minimal and flexible Node.js web application framework that provides a robust set of features.";
      examplePhoto = unifilImage;
      link = "https://portfolio-unifil.onrender.com/";
      repository = "https://github.com/witortenadev/Portfolio-Unifil";
      break;
    case 8:
      techTitle = "MongoDB";
      techParagraph =
        "MongoDB is a document-oriented NoSQL database used for high volume data storage.";
      // examplePhoto = mongodbImage;
      // link = "https://genesisblog.onrender.com/";
      // repository = "https://github.com/witordev/genesisblog";
      break;
    case 9:
      techTitle = "Mongoose";
      techParagraph =
        "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.";
      // examplePhoto = mongooseImage;
      // link = "https://genesisblog.onrender.com/";
      // repository = "https://github.com/witordev/genesisblog";
      break;
  }

  return (
    <section id="tech" className="max-w-screen-xl mx-auto mb-20">
      <div className="mx-10 mb-20 flex items-center gap-4">
        <div className="border-t-2 w-full h-1"></div>
        <h1 className="text-xl min-w-fit">Dev Tools</h1>
        <div className="border-t-2 w-full h-1"></div>
      </div>
      <div className="md:place-items-center lg:justify-items-start lg:place-items-center md:ml-0 lg:ml-10 mx-10 grid grid-auto-cols sm:grid-cols-2 place-items-center sm:place-items-start">
        <div className="w-fit grid place-items-center gap-10 grid-cols-2 lg:grid-cols-3">
          <button onClick={() => setTechActive(1)}>
            <div
              className={`${techActive === 1 ? "text-green-500" : ""}
              ${techActive === 0 ? "text-green-500" : ""}
               flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiJavascript size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(2)}>
            <div
              className={`${
                techActive === 2 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiHtml5 size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(3)}>
            <div
              className={`${
                techActive === 3 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiCss3 size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(4)}>
            <div
              className={`${
                techActive === 4 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiReact size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(5)}>
            <div
              className={`${
                techActive === 5 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiTailwindcss size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(6)}>
            <div
              className={`${
                techActive === 6 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiNodedotjs size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(7)}>
            <div
              className={`${
                techActive === 7 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiExpress size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(8)}>
            <div
              className={`${
                techActive === 8 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiMongodb size={100} />
            </div>
          </button>
          <button onClick={() => setTechActive(9)}>
            <div
              className={`${
                techActive === 9 ? "text-green-500" : ""
              } flex items-center justify-center w-fit h-fit hover:text-green-300`}
            >
              <SiMongoose size={100} />
            </div>
          </button>
        </div>
        <div className="w-full lg:w-fit place-self-start mx-auto mt-10 sm:mt-0">
          {techActive == 0 && (
            <div className="text-lg text-green-300 mb-5 text-center sm:text-left">
              Select a technology to see more about it
            </div>
          )}
          <div>
            <div className="border-t-2 p-5 bg-black/70 backdrop-blur-xl">
              <h1 className="text-4xl">{techTitle}</h1>
              <p className="text-xl">{techParagraph}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline"
                >
                  See example project
                </a>
              )}
            </div>
            {examplePhoto && (
              <>
              <div className="flex items-center justify-between gap-5 px-5 p-2 border-t text-lg font-serif bg-green-300/30 backdrop-blur-xl w-full h-full">
              <p>Practical Application</p>
              <div className="flex gap-5">
                <a href={repository} target="_blank">
                  <FaGithub />
                </a>
                <a href={link} target="_blank">
                  <FaLink />
                </a>
              </div>
            </div>
            <div className="overflow-hidden">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                <img
                  className="w-full h-full object-cover"
                  src={examplePhoto}
                  alt="Project Photo"
                />
              </a>
            </div>
            </>
            )}
            <div className="flex gap-5 mt-5 flex-wrap">
              {techActive === 0 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiJavascript size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 0 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 0 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}

              {techActive === 1 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiJavascript size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 1 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 1 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}

              {techActive === 2 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 2 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}

              {techActive === 3 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 3 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}

              {techActive === 4 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiJavascript size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 4 && (
                <a
                  href="https://r3f.docs.pmnd.rs/getting-started/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiThreedotjs size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 4 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 4 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 4 && (
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiReact size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 4 && (
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiTailwindcss
                    size={50}
                    className="bg-white p-2 text-black"
                  />
                </a>
              )}

            {techActive === 5 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 5 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 5 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiJavascript size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 5 && (
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiTailwindcss
                    size={50}
                    className="bg-white p-2 text-black"
                  />
                </a>
              )}
              {techActive === 5 && (
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiReact size={50} className="bg-white p-2 text-black" />
                </a>
              )}

              {techActive === 6 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiJavascript size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiReact size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiTailwindcss
                    size={50}
                    className="bg-white p-2 text-black"
                  />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiNodedotjs size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiExpress size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiMongodb size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 6 && (
                <a
                  href="https://mongoosejs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiMongoose size={50} className="bg-white p-2 text-black" />
                </a>
              )}

              {techActive === 7 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiHtml5 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 7 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCss3 size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 7 && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiJavascript size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 7 && (
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiExpress size={50} className="bg-white p-2 text-black" />
                </a>
              )}


              {techActive === 8 && (
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiMongodb size={50} className="bg-white p-2 text-black" />
                </a>
              )}
              {techActive === 9 && (
                <a
                  href="https://mongoosejs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiMongoose size={50} className="bg-white p-2 text-black" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
