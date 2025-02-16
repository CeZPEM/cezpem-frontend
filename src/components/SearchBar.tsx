import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type SearchBarProps = {
  id: string;
  onChange?: (query: string) => void;
  variant?: "white" | "dark";
};

export default function SearchBar({
  onChange,
  variant,
  id,
}: Readonly<SearchBarProps>) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center">
      <label htmlFor={id} className="relative w-full max-w-2xl">
        <AiOutlineSearch
          size={22}
          className="absolute left-3 my-auto top-[13px] text-gray-500"
        />
        <input
          type="text"
          id={id}
          placeholder="Encontre um curso ou professor"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange?.(e.target.value);
          }}
          className={`w-full focus:ring-2 font-archivo text-20px pl-10 pr-3 py-2 rounded-lg bg-white text-gray-900 border outline-none shadow-sm ${
            variant === "dark"
              ? "border-blue-200 focus:ring-lightBlue"
              : "border-gray-200 focus:ring-darkOrange"
          }`}
        />
      </label>
    </div>
  );
}
