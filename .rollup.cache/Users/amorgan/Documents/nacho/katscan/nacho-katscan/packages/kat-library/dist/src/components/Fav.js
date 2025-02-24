import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
const Fav = ({ checked = false }) => {
    const [isChecked, setIsChecked] = useState(checked);
    return (_jsx("button", { onClick: () => setIsChecked(!isChecked), className: "transition-colors duration-300 text-gray-900 hover:text-teal-400", children: _jsx(StarIcon, { className: `w-6 h-6 ${isChecked ? 'fill-teal-400 text-teal-400' : 'fill-gray-700'}` }) }));
};
export default Fav;
//# sourceMappingURL=Fav.js.map