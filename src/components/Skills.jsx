
import React from "react";

function Skills() {
  const skills = ["React", "Tailwind", "Node.js", "SQLite", "LangChain", "Python", "AI/ML"];

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span key={i} className="px-4 py-2 bg-black/50 text-orange-400 rounded-lg shadow-md">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Skills;
