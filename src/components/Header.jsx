import { FaArrowRight, FaRegStar } from "react-icons/fa"; // Example of importing a specific icon
import headerImage from "/images/hero-img.jpg";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header id="home" className="max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center sm:items-start gap-2 my-50 m-6 mx-10 sm:ml-10 lg:mx-6 text-center sm:text-left">
        <h1 className="text-8xl font-bold">Witor Tenã</h1>
        <h1 className="w-fit mb-10 text-xl lg:max-w-2/3 border-l-white border-l-5 pl-2">
          Professional Problem Solver
        </h1>
        <h1 className="text-4xl lg:max-w-2/3 mb-10">
          Providing intelligent solutions to intelligent people
        </h1>
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 w-fit">
          <Link to="contact" smooth={true} duration={700}>
            <button className="hover:cursor-pointer w-fit h-fit border border-white flex group items-center justify-center">
              <h1 className="text-4xl px-6">Contact</h1>
              <div className="px-6 border-l group-hover:bg-white group-hover:text-black border-white flex items-center py-6">
                <FaArrowRight size={30} />
              </div>
            </button>
          </Link>
          <div className="max-w-70 w-full flex flex-col gap-2">
            <div className="flex justify-around sm:justify-start w-full text-green-400 text-2xl">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <h1 className="w-full font-serif">
              "Excelent work from an excelent professional..."
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute w-1/2 left-1/2 top-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={headerImage}
          alt="Hero Image"
        />
        <div className="backdrop-blur-xs absolute inset-0 bg-gradient-to-r from-midnight to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>
      </div>
    </header>
  );
}
