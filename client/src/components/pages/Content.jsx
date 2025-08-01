import React, { useEffect, useState } from 'react';
import HackathonCard from '../Frags/HackathonCard';



const Content = () => {
  const [hackathons, setHackathons] = useState([]);
  const [platform, setPlatform] = useState('devpost');
  const [search, setSearch] = useState('');

  const fetchHackathons = async (source, keyword = '') => {
    try {
      const res = await fetch(`http://localhost:5000/api/platform/${source}?q=${keyword}`);
      const data = await res.json();
      setHackathons(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHackathons(platform, search);
  }, [platform]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchHackathons(platform, e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🚀 HacaTrack - Latest Hackathons</h1>

      <div className="flex flex-col items-center mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${platform === 'devpost' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
            onClick={() => setPlatform('devpost')}
          >
            Devpost
          </button>
          <button
            className={`px-4 py-2 rounded ${platform === 'mlh' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
            onClick={() => setPlatform('mlh')}
          >
            MLH
          </button>
          <button
            className={`px-4 py-2 rounded ${platform === 'hackerearth' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
            onClick={() => setPlatform('hackerearth')}
          >
            HackerEarth
          </button>
        </div>

        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search hackathons by name or topic..."
          className="w-full max-w-md px-4 py-2 border rounded focus:outline-none focus:ring"
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={index} hackathon={hackathon} />
        ))}
      </div>
    </div>
  );
};

export default Content;