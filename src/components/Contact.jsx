import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark text-white px-4">
      <div className="bg-black/50 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center space-y-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
          Contact Me
        </h2>
        <p className="text-gray-300 text-lg">
          Feel free to reach out for collaborations or projects!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {/* Email */}
          <a
            href="mailto:techieboy1212@gmail.com" // <-- change to your email
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
          >
            <FaEnvelope className="text-orange-400" /> techieboy1212@gmail.com
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/s/zWRmDlR" // <-- change to Fiverr profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
          >
            <p className="text-green-400" > Fiverr</p>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/Jaiyash_Prog" // <-- change to your Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
          >
            <p className="text-white" > X </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
