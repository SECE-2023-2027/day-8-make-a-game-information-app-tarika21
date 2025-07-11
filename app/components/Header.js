'use client';

import { useState } from 'react';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <header className="p-4 bg-gray-200 dark:bg-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
      <h1 className="text-xl font-bold">Game Info App</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search games..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-400 rounded-md mr-2"
        />
        <button
          onClick={handleSearch}
          className="px-3 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
    </header>
  );
}
