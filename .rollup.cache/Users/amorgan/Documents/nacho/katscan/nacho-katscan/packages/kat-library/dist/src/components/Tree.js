import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Group } from '@visx/group';
import { Treemap, hierarchy, treemapSquarify, treemapBinary, treemapDice, treemapResquarify, treemapSlice, treemapSliceDice, } from '@visx/hierarchy';
import { scaleLinear } from '@visx/scale';
export const color1 = '#f3e9d2';
const color2 = '#4281a4';
export const background = '#114b5f';
const tileMethods = {
    treemapSquarify,
    treemapBinary,
    treemapDice,
    treemapResquarify,
    treemapSlice,
    treemapSliceDice,
};
const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };
export default function TreemapComponent({ width, height, data, margin = defaultMargin }) {
    const [tileMethod, setTileMethod] = useState('treemapSquarify');
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
    const root = hierarchy(data)
        .sum((d) => (d.value ? d.value : 0))
        .sort((a, b) => (b.value || 0) - (a.value || 0));
    const colorScale = scaleLinear({
        domain: [0, root.value || 1],
        range: [color2, color1],
    });
    return width < 10 ? null : (_jsxs("div", { children: [_jsx("label", { children: "Tile Method" }), ' ', _jsx("select", { onClick: (e) => e.stopPropagation(), onChange: (e) => setTileMethod(e.target.value), value: tileMethod, children: Object.keys(tileMethods).map((tile) => (_jsx("option", { value: tile, children: tile }, tile))) }), _jsx("div", { children: _jsxs("svg", { width: width, height: height, children: [_jsx("rect", { width: width, height: height, rx: 14, fill: background }), _jsx(Treemap, { top: margin.top, root: root, size: [xMax, yMax], tile: tileMethods[tileMethod], round: true, children: (treemap) => (_jsx(Group, { children: treemap
                                    .descendants()
                                    .reverse()
                                    .map((node, i) => {
                                    const nodeWidth = node.x1 - node.x0;
                                    const nodeHeight = node.y1 - node.y0;
                                    return (_jsx(Group, { top: node.y0 + margin.top, left: node.x0 + margin.left, children: _jsx("rect", { width: nodeWidth, height: nodeHeight, stroke: background, fill: colorScale(node.value || 0) }) }, `node-${i}`));
                                }) })) })] }) })] }));
}
//# sourceMappingURL=Tree.js.map