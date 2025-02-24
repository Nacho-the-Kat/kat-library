import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AreaClosed, LinePath } from "@visx/shape";
import { scaleUtc, scaleLinear } from "@visx/scale";
import { curveMonotoneX } from "@visx/curve";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { extent, max } from "d3-array";
const WidgetChartComponent = ({ title, subtitle, data, width = 600, height = 300, }) => {
    const margin = { top: 40, right: 30, bottom: 40, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    // Define scales
    const xScale = scaleUtc({
        domain: extent(data, (d) => d.date),
        range: [0, innerWidth],
    });
    const yScale = scaleLinear({
        domain: [0, (max(data, (d) => d.value) || 0) + 10], // Ensure proper scaling
        range: [innerHeight, 0],
    });
    return (_jsxs("div", { className: "bg-white dark:bg-gray-900 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 p-4", children: [_jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: title }), subtitle && _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: subtitle })] }), _jsx("svg", { width: width, height: height, children: _jsxs(Group, { left: margin.left, top: margin.top, children: [_jsx(AreaClosed, { data: data, x: (d) => { var _a; return (_a = xScale(d.date)) !== null && _a !== void 0 ? _a : 0; }, y: (d) => { var _a; return (_a = yScale(d.value)) !== null && _a !== void 0 ? _a : 0; }, yScale: yScale, strokeWidth: 0, fill: "rgba(58, 221, 190, 0.3)" // Light transparent fill
                            , curve: curveMonotoneX }), _jsx(LinePath, { data: data, x: (d) => { var _a; return (_a = xScale(d.date)) !== null && _a !== void 0 ? _a : 0; }, y: (d) => { var _a; return (_a = yScale(d.value)) !== null && _a !== void 0 ? _a : 0; }, stroke: "teal", strokeWidth: 2, curve: curveMonotoneX }), _jsx(AxisLeft, { scale: yScale, stroke: "gray" }), _jsx(AxisBottom, { scale: xScale, top: innerHeight, stroke: "gray" })] }) })] }));
};
export default WidgetChartComponent;
//# sourceMappingURL=WidgetChart.js.map