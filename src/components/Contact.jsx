
import React from "react";

function Contact() {
  return (
    <div className="p-10 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Contact</h2>
      <p className="text-gray-300">Let’s connect! Reach me at:</p>
      <a href="mailto:your@email.com" className="text-orange-400 font-semibold hover:underline">
        your@email.com
      </a>
    </div>
  );
}
export default Contact;
