import React, { useEffect, useState } from 'react';
import { fetchDevpostHackathons, fetchOtherHackathons } from '../../utils/api';
import HackathonCard from '../Frags/HackathonCard';
import FilterBar from '../Frags/FilterBar';
import Pagination from '../Frags/Pagination';




const ITEMS_PER_PAGE = 6;

const Content = () => {
  const [all, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [platform, setPlatform] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load() {
      try {
        const dp = await fetchDevpostHackathons();
        const other = await fetchOtherHackathons();
        const combined = [...dp, ...other].map(h => ({
          name: h.name,
          date: h.date,
          description: h.description,
          platform: h.platform || h.source,
          link: h.link,
        }));
        setAll(combined);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  useEffect(() => {
    const f = all.filter(h => (platform ? h.platform === platform : true));
    setFiltered(f);
    setPage(1);
  }, [platform, all]);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="p-4">
      <FilterBar platform={platform} setPlatform={setPlatform} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageItems.map((h, i) => <HackathonCard key={i} hackathon={h} />)}
      </div>
      <Pagination page={page} setPage={setPage} total={pageCount} />
    </div>
  );
};

export default Content;
