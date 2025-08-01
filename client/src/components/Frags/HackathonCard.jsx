import React from 'react';

const HackathonCard = ({ hackathon }) => (
  <div className="bg-white shadow-md rounded-xl p-4 m-4 w-full max-w-md">
    <h2 className="text-xl font-bold mb-2">{hackathon.title}</h2>
    <p className="text-gray-600">{hackathon.tagline}</p>
    <p className="text-sm mt-2">Deadline: {hackathon.submissionDeadline}</p>
    <a
      href={hackathon.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      View Details
    </a>
  </div>
);

export default HackathonCard;