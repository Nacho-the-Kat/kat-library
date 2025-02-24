import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { MagnifyingGlassIcon, CircleStackIcon } from "@heroicons/react/24/solid";
const SearchComponent = ({ placeholder = "Search...", onSearch, suggestions = [], showHint = false, enableAutocomplete = false, }) => {
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [hintVisible, setHintVisible] = useState(showHint);
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        setHintVisible(true);
        if (enableAutocomplete) {
            if (newQuery.trim() === "") {
                setShowAutocomplete(false);
                setFilteredSuggestions([]);
            }
            else {
                const filtered = suggestions.filter((item) => item.tick.toLowerCase().includes(newQuery.toLowerCase()));
                setFilteredSuggestions(filtered);
                setShowAutocomplete(filtered.length > 0);
            }
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && onSearch) {
            onSearch(query);
            setHintVisible(false);
            setShowAutocomplete(false);
            setFilteredSuggestions([]);
        }
    };
    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setShowAutocomplete(false);
        setFilteredSuggestions([]);
        if (onSearch)
            onSearch(suggestion);
    };
    return (_jsxs("div", { className: "relative w-full max-w-sm", children: [_jsx(MagnifyingGlassIcon, { className: "absolute left-3 top-3 h-5 w-5 text-gray-500 dark:text-gray-400" }), _jsx("input", { type: "text", value: query, onChange: handleInputChange, onKeyDown: handleKeyDown, className: "pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white", placeholder: placeholder }), hintVisible && showHint && query && (_jsxs("p", { className: "absolute left-10 top-full mt-1 text-xs text-gray-500 dark:text-gray-400", children: ["Press ", _jsx("span", { className: "font-semibold", children: "Enter" }), " to search"] })), enableAutocomplete && showAutocomplete && filteredSuggestions.length > 0 && (_jsx("ul", { className: "absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg max-h-40 overflow-y-auto z-10", children: filteredSuggestions.map((item, index) => (_jsxs("li", { onClick: () => handleSuggestionClick(item.tick), className: "flex items-center px-4 py-2 cursor-pointer text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700", children: [item.image ? (_jsx("img", { src: item.image, alt: item.tick, className: "w-6 h-6 rounded-full mr-2" })) : (_jsx(CircleStackIcon, { className: "w-6 h-6 text-gray-400 mr-2" })), item.tick] }, index))) }))] }));
};
export default SearchComponent;
//# sourceMappingURL=Search.js.map