import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { CircleStackIcon } from "@heroicons/react/24/outline";
const TokenList = ({ title, icon, legend, tokens, maxItems = 10, showMoreUrl, }) => {
    const [showAll, setShowAll] = useState(false);
    const displayedTokens = showAll ? tokens : tokens.slice(0, maxItems);
    return (<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 border border-gray-200 dark:border-gray-700 max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2">
        <div className="flex items-center">
          {icon && <span className="text-gray-500 dark:text-gray-300">{icon}</span>}
          <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        {legend && (<span className="ml-auto text-sm text-gray-600 dark:text-gray-400">{legend}</span>)}
      </div>

      {/* Token List */}
      <div className="mt-3 space-y-3">
        {displayedTokens.map((token, index) => (<div key={index} className="flex items-center justify-between">
            {/* Index */}
            <span className="text-sm text-gray-500 dark:text-gray-400 w-6">{index + 1}</span>

            {/* Token Image */}
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center ml-4">
              {token.image ? (<img src={token.image} alt={token.tick} className="w-full h-full object-cover"/>) : (<CircleStackIcon className="w-6 h-6 text-gray-400"/>)}
            </div>

            {/* Token Name & Price */}
            <div className="flex-1 ml-3">
              <a href={`/token/krc20/${token.tick}`} className="text-gray-900 dark:text-white font-medium hover:text-teal-500">
                {token.tick}
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400">{token.price || "$0.000000"}</p>
            </div>

            {/* Price Change Badge */}
            {token.change !== undefined && (<span className={`px-2 py-1 text-xs rounded-full ${token.change >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {token.change >= 0 ? `+${token.change}%` : `${token.change}%`}
              </span>)}
          </div>))}
      </div>

      {/* Show More */}
      {tokens.length > maxItems && (<a href={showMoreUrl} className="w-full mt-3 text-sm text-teal-500 flex items-center justify-center hover:text-teal-700">
          Show More
          <ChevronDownIcon className="w-4 h-4 ml-1"/>
        </a>)}
    </div>);
};
export default TokenList;
//# sourceMappingURL=TokenList.jsx.map