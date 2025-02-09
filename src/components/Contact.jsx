import { useRef } from "react";
import emailjs from "emailjs-com";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "WitorDev", // Replace with your EmailJS service ID
        "template_xlo7rpk", // Replace with your EmailJS template ID
        form.current,
        "3rkGoqHD5pWIP2q3C" // Replace with your EmailJS user ID
      )
      .then(() => {
        alert("Email sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section className="mx-auto max-w-screen-xl" id="contact">
      <div className="px-10 flex items-center gap-4 mb-20">
        <div className="border-t-2 w-full h-1"></div>
        <h1 className="text-xl min-w-fit">Contact</h1>
        <div className="border-t-2 w-full h-1"></div>
      </div>
      <div className="m-10 px-4 py-10 border-t border-t-green-500 bg-black/60 backdrop-blur-xl">
        <h1 className="text-4xl text-center text-green-500 pb-10 font-bold">Contact</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="sm:mx-4 my-2 flex flex-col gap-2"
        >
          <input
            className="bg-gray-900 p-2 text-white"
            type="text"
            autoComplete="true"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="bg-gray-900 p-2 text-white"
            type="email"
            autoComplete="true"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="bg-gray-900 p-2 text-white"
            name="message"
            autoComplete="true"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="bg-green-500 p-2 hover:bg-green-600 transition"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>

      <div className="absolute left-1/2 -translate-y-50 -z-10">
        <img
          className="w-full h-full object-cover"
          src="images/contact-img.jpg"
          alt="Hero Image"
        />
        <div className="backdrop-blur-xs absolute inset-0 bg-gradient-to-r from-midnight to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>
      </div>
      <div className="m-10 p-10 border-l border-l-green-500 bg-black/60 backdrop-blur-xl">
        <div className="flex gap-10">
          <SiGithub size={50} className="hover:text-green-500" />
          <SiWhatsapp size={50} className="hover:text-green-500" />
          <SiGmail size={50} className="hover:text-green-500" />
        </div>
      </div>
    </section>
  );
}
