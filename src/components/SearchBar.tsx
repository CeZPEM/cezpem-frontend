import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const randomId = `search-${Math.random().toString(36).substring(7)}`;

  return (
    <div className="flex justify-center">
      <label htmlFor={randomId} className="relative w-full max-w-2xl">
        <AiOutlineSearch
          size={22}
          className="absolute left-3 my-auto top-2 text-gray-500"
        />
        <input
          type="text"
          id={randomId}
          placeholder="Encontre um curso ou professor"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
        />
      </label>
    </div>
  );
}
