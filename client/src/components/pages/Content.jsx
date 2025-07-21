import React, { useEffect, useState } from 'react';

const Content = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    fetch('/api/hackathons')
      .then(res => res.json())
      .then(setHackathons);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hackathons.map((hack, i) => (
        <div key={i} className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">{hack.name}</h2>
          <p className="text-sm text-gray-500">{hack.platform}</p>
          <p>{hack.description}</p>
          <a href={hack.link} target="_blank" rel="noreferrer" className="text-blue-600">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default Content;