import React, { useState } from 'react';

const SearchFilter = ({ profiles, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = profiles.filter((p) =>
      p.name.toLowerCase().includes(term.toLowerCase()) ||
      p.address.toLowerCase().includes(term.toLowerCase()) ||
      p.description.toLowerCase().includes(term.toLowerCase())
    );
    onFilter(filtered); // Pass filtered results to parent
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search by name, location, or description..."
      className="search-bar"
    />
  );
};

export default SearchFilter;