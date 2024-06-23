// components/blog/SearchBar.tsx
import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import { Post } from "@/types";
import { SearchIcon } from "../icons/SearchIcon";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Post[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const fetchSuggestions = async (searchQuery: string) => {
    if (!searchQuery) {
      setSuggestions([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const response = await fetch(
      `https://www.maungshine.site/api/search-posts?query=${searchQuery}`
    );
    const data = await response.json();
    setSuggestions(data.posts);
    setLoading(false);
  };

  const debouncedFetchSuggestions = useCallback(
    debounce((value: string) => fetchSuggestions(value), 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetchSuggestions(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: Post) => {
    setShowSuggestions(false);
    router.push(`/blog/posts/${suggestion.slug}`);
  };

  return (
    <div className="justify-end flex">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center mb-8 max-w-[600px] w-full"
      >
        <div className="relative w-full">
          <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            radius="sm"
            aria-label="Search posts"
            variant="bordered"
            size="md"
            placeholder="Type to search posts..."
            startContent={
              <SearchIcon
                props={{
                  className:
                    "text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0",
                }}
              />
            }
          />
          {loading && (
            <div className="absolute top-full dark:bg-[#040309] mt-1 left-0 w-full bg-white shadow-lg border rounded-md z-10 p-2">
              Loading...
            </div>
          )}
          {showSuggestions && !loading && suggestions.length > 0 && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white shadow-lg border rounded-md z-10 dark:bg-[#040309]">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 cursor-pointer hover:bg-gray-100 border-b dark:hover:bg-[#06050f] last:border-none hover:underline hover:rounded-md"
                  role="option"
                >
                  {suggestion.title.rendered}
                </div>
              ))}
            </div>
          )}
        </div>
        <Button
          type="button"
          onClick={() => onSearch(query)}
          className="ml-2 p-2 bg-btnDarkBlue hover:bg-btnDarkBlue/80 text-white rounded-md"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
