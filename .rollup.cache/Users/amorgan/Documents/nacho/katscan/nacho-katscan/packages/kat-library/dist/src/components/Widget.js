import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Widget = ({ value, icon, onClick }) => {
    const handleClick = (event) => {
        if (onClick) {
            event.stopPropagation(); // Prevent unwanted bubbling
            onClick();
        }
    };
    return (_jsx("div", { className: `flex items-center flex-col col-span-full sm:col-span-4 xl:col-span-2 bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700/60 transition-colors duration-300 ease-in-out ${onClick ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900' : ''}`, onClick: onClick ? handleClick : undefined, children: _jsxs("div", { className: "px-5 pt-5 pb-4", children: [_jsx("header", { className: "flex justify-center items-center mb-2", children: _jsx("div", { className: "text-teal-400", children: icon }) }), _jsx("div", { className: "flex justify-center items-center", children: _jsx("div", { className: "text-lg center text-gray-100 dark:text-gray-100", children: value }) })] }) }));
};
export default Widget;
//# sourceMappingURL=Widget.js.map