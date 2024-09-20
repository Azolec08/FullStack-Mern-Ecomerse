import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

// Define the pages that can be searched
const pages = [
  {
    value: "home",
    label: "Home",
    path: "/", // Route to navigate to
    keywords: ["home", "start", "dashboard"], // Keywords for this page
  },
  {
    value: "category",
    label: "Category",
    path: "/category/1", // Example category route
    keywords: ["category", "shop", "items"], // Keywords for this page
  },
  {
    value: "product",
    label: "Product",
    path: "/product/1", // Example product route
    keywords: ["product", "item", "details"], // Keywords for this page
  },
];

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPages, setFilteredPages] = useState(pages);
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter pages based on the search term matching any keyword
    setFilteredPages(
      pages.filter((page) =>
        page.keywords.some((keyword) => keyword.includes(searchValue))
      )
    );
  };

  // Handle item selection and navigation
  const handleItemSelect = (path: string) => {
    navigate(path);
    setSearchTerm(""); // Clear the search after navigation
  };

  return (
    <div className="relative w-[200px]">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search pages..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-2 py-1 w-full"
      />

      {/* Dropdown List */}
      {searchTerm && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
          {filteredPages.length > 0 ? (
            filteredPages.map((page) => (
              <li
                key={page.value}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleItemSelect(page.path)}
              >
                {page.label}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No pages found</li>
          )}
        </ul>
      )}
    </div>
  );
}
