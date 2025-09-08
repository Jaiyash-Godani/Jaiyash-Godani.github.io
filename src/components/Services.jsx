
import React from "react";

function Services() {
  const services = [
    { name: "AI Solutions", desc: "Agentic AI, ML, automation workflows" },
    { name: "Web Development", desc: "React, Tailwind, modern UI/UX" },
    { name: "APIs & Integration", desc: "REST APIs, DB integration, IoT control" }
  ];

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-black/50 rounded-2xl shadow-lg p-6 hover:shadow-primary/50 transition">
            <h3 className="text-xl font-bold text-orange-400">{s.name}</h3>
            <p className="text-gray-400 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;
