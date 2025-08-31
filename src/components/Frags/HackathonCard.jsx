import React from 'react';

const HackathonCard = ({ hackathon }) => (
  <div className="bg-white p-4 shadow-md rounded-lg border hover:shadow-lg transition dark:bg-gray-800 dark:text-gray-100">
    <h2 className="text-xl font-semibold">{hackathon.name}</h2>
    <p className="text-sm mt-1">📅 {hackathon.date}</p>
    <p className="mt-2">{hackathon.description}</p>
    <p className="text-sm mt-2">🌍 {hackathon.platform}</p>
    <a
      href={hackathon.link}
      target="_blank"
      className="inline-block mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
    >
      Visit
    </a>
  </div>
);

export default HackathonCard;
