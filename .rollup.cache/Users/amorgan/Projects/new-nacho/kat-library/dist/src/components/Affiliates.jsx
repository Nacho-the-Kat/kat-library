import React from "react";
const AffiliateComponent = ({ affiliates, displayMode = "iconsWithNames", layout = "horizontal", }) => {
    return (<div className={`flex ${layout === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-3"} items-center`}>
      {affiliates.map((affiliate, index) => (<div key={index} className="flex items-center space-x-2">
          {affiliate.url ? (<a href={affiliate.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition">
              <img src={affiliate.icon} alt={affiliate.name} className="w-8 h-8 rounded-full"/>
              {displayMode === "iconsWithNames" && (<span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {affiliate.name}
                </span>)}
            </a>) : (<>
              <img src={affiliate.icon} alt={affiliate.name} className="w-8 h-8 rounded-full"/>
              {displayMode === "iconsWithNames" && (<span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {affiliate.name}
                </span>)}
            </>)}
        </div>))}
    </div>);
};
export default AffiliateComponent;
//# sourceMappingURL=Affiliates.jsx.map