
import React, { useState, useEffect } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(Object.values(data)));
  }, []);

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Blogs</h2>

      {selected ? (
        <div className="bg-black/50 p-6 rounded-2xl shadow-lg">
          <button onClick={() => setSelected(null)} className="mb-4 text-sm text-orange-400 hover:underline">← Back</button>
          <h3 className="text-2xl font-bold text-orange-400">{selected.name}</h3>
          <img src={selected.imgurl} alt={selected.name} className="my-4 rounded-lg shadow-md"/>
          <p className="text-gray-300">{selected.content}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((b, i) => (
            <div key={i} className="bg-black/50 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-orange-400">{b.name}</h3>
              <p className="text-gray-400 mt-2">{b.desc}</p>
              <button onClick={() => setSelected(b)} className="mt-4 px-4 py-2 bg-primary rounded-lg text-black font-semibold shadow-md hover:shadow-orange-500/50">
                Read
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Blogs;
