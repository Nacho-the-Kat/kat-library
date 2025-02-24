import { jsx as _jsx } from "react/jsx-runtime";
const colorClasses = {
    primary: "bg-teal-400 text-white",
    dark: "bg-gray-900 text-white",
    gray: "bg-gray-500 text-white",
    accent: "bg-teal-300 text-gray-900",
};
const Pill = ({ label, color = "primary" }) => {
    return (_jsx("span", { className: `px-3 py-1 text-sm font-semibold rounded-full ${colorClasses[color]}`, children: label }));
};
export default Pill;
//# sourceMappingURL=Pill.js.map