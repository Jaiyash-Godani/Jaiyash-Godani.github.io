import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => setProjects(Object.values(data)));
  }, []);

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-black/50 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-orange-400">{p.name}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <Link to={p.url} className="mt-4 px-4 py-2 bg-primary rounded-lg text-black font-semibold shadow-md hover:shadow-orange-500/50">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
