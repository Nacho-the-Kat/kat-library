import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const ProgressBar = ({ value, color = "bg-teal-400" }) => {
    return (_jsxs("div", { className: "relative w-full", children: [_jsxs("div", { className: "absolute left-1/2 -translate-x-1/2 -top-4 text-[10px] font-medium text-gray-900 dark:text-white", children: [value, "%"] }), _jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden", children: _jsx("div", { className: `h-full ${color} transition-all duration-300`, style: { width: `${value}%` } }) })] }));
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map