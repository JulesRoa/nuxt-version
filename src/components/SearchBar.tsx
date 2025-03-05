import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="what marketing challenge can we help you with?"
          className="w-full py-4 px-6 pr-12 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 lowercase"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;