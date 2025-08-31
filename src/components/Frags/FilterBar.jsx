const FilterBar = ({ platform, setPlatform }) => {
  return (
    <div className="my-4 flex gap-4">
      <select
        className="px-3 py-2 border rounded"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="">All Platforms</option>
        <option value="Devpost">Devpost</option>
        <option value="MLH">MLH</option>
        <option value="HackerEarth">HackerEarth</option>
      </select>
    </div>
  );
};

export default FilterBar;
