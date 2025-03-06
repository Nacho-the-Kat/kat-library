import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from '@headlessui/react';
const SwitchComponent = ({ enabled, onChange, name, legend, icon }) => {
    return (_jsxs("div", { className: "flex items-center space-x-2 text-grayCustom", children: [icon && _jsx("span", { className: "w-5 h-5 text-primary", children: icon }), _jsx(Switch, { checked: enabled, onChange: onChange, className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${enabled ? 'bg-primary' : 'bg-gray-300'}`, children: _jsx("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${enabled ? 'translate-x-6' : 'translate-x-1'}` }) }), name && _jsx("span", { className: "text-sm font-medium text-grayCustom", children: name }), legend && _jsx("span", { className: "text-xs text-grayCustom", children: legend })] }));
};
export default SwitchComponent;
//# sourceMappingURL=Switch.js.map