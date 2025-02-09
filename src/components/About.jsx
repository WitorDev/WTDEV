import React from "react";

export default function About() {
 return (
    <section id="about" className="max-w-screen-xl mx-auto">
      <div className="mx-10 mb-20 flex items-center gap-4">
        <div className="border-t-2 w-full h-1"></div>
        <h1 className="text-xl min-w-fit">About Me</h1>
        <div className="border-t-2 w-full h-1"></div>
      </div>
      <div className="flex flex-col mx-10 border-t-2 px-4 mb-20 border-green-500 h-full pt-5 backdrop-blur-xl bg-black/60">
        <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start text-center sm:text-left sm:flex-row gap-4 mb-4">
          <div className="overflow-hidden w-20">
            <img
              className="object-cover"
              src="https://picsum.photos/200"
              alt="Dev Photo"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="text-4xl">Witor Tenã</h1>
            <h2 className="text-xl text-gray-400">Londrina, Paraná, Brasil</h2>
          </div>
          </div>
          <div className="text-justify">
            <p>I'm a Brazilian web developer, I was introduced to coding when I was young, when I had the opportunity to try Python for the first time, I loved seeing my first "Hello World!" in the console and since then I can't stop learning. Now it's not only a habit, but also my mission, to code and gain as much knowledge as I can from this ever-growing World Wide Web...</p>
          </div>
      </div>
    </section>
  );
}
