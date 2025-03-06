import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Tab } from "@headlessui/react";
const TabsComponent = ({ tabs }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (_jsx("div", { className: "w-full", children: _jsxs(Tab.Group, { selectedIndex: selectedIndex, onChange: setSelectedIndex, children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute bottom-0 left-0 w-full border-b-2 border-gray-300 dark:border-gray-700" }), _jsx(Tab.List, { className: "flex relative z-10", children: tabs.map((tab, index) => (_jsx(Tab, { className: ({ selected }) => `px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none relative
                  ${selected
                                    ? "text-teal-500"
                                    : "text-gray-700 dark:text-gray-400 hover:text-teal-400"}`, children: ({ selected }) => (_jsxs("div", { className: "relative", children: [tab.label, selected && (_jsx("div", { className: "absolute left-0 right-0 bottom-[-2px] border-b-4 border-teal-400" }))] })) }, index))) })] }), _jsx(Tab.Panels, { children: tabs.map((tab, index) => (_jsx(Tab.Panel, { className: "pt-4", children: tab.content }, index))) })] }) }));
};
export default TabsComponent;
//# sourceMappingURL=Tabs.js.map