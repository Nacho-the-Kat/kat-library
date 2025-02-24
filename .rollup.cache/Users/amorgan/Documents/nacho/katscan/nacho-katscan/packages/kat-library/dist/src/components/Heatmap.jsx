import React, { useState } from 'react';
import { Group } from '@visx/group';
import genBins from '@visx/mock-data/lib/generators/genBins';
import { scaleLinear } from '@visx/scale';
import { HeatmapCircle, HeatmapRect } from '@visx/heatmap';
import { getSeededRandom } from '@visx/mock-data';
const hot1 = '#77312f';
const hot2 = '#f33d15';
const cool1 = '#122549';
const cool2 = '#b4fbde';
export const background = '#28272c';
const seededRandom = getSeededRandom(0.41);
const binData = genBins(16, 16, (idx) => 150 * idx, (i, number) => 25 * (number - i) * seededRandom());
function max(data, value) {
    return Math.max(...data.map(value));
}
function min(data, value) {
    return Math.min(...data.map(value));
}
const bins = (d) => d.bins;
const count = (d) => d.count;
const colorMax = max(binData, (d) => max(bins(d), count));
const bucketSizeMax = max(binData, (d) => bins(d).length);
const xScale = scaleLinear({ domain: [0, binData.length] });
const yScale = scaleLinear({ domain: [0, bucketSizeMax] });
const circleColorScale = scaleLinear({ range: [hot1, hot2], domain: [0, colorMax] });
const rectColorScale = scaleLinear({ range: [cool1, cool2], domain: [0, colorMax] });
const opacityScale = scaleLinear({ range: [0.1, 1], domain: [0, colorMax] });
const defaultMargin = { top: 10, left: 20, right: 20, bottom: 110 };
function Heatmap({ width, height, type = 'circle', events = false, hover = false, borderOnHover = false, margin = defaultMargin, separation = 20, }) {
    const [tooltipData, setTooltipData] = useState(null);
    const size = width > margin.left + margin.right ? width - margin.left - margin.right - separation : width;
    const xMax = size / 2;
    const yMax = height - margin.bottom - margin.top;
    const binWidth = xMax / binData.length;
    const binHeight = yMax / bucketSizeMax;
    const radius = min([binWidth, binHeight], (d) => d) / 2;
    xScale.range([0, xMax]);
    yScale.range([yMax, 0]);
    return width < 10 ? null : (<svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} rx={14} fill={background}/>
      <Group top={margin.top} left={margin.left}>
        {type === 'circle' ? (<HeatmapCircle data={binData} xScale={(d) => { var _a; return (_a = xScale(d)) !== null && _a !== void 0 ? _a : 0; }} yScale={(d) => { var _a; return (_a = yScale(d)) !== null && _a !== void 0 ? _a : 0; }} colorScale={circleColorScale} opacityScale={opacityScale} radius={radius} gap={2}>
            {(heatmap) => heatmap.map((heatmapBins) => heatmapBins.map((bin) => (<circle key={`heatmap-circle-${bin.row}-${bin.column}`} className="visx-heatmap-circle" cx={bin.cx} cy={bin.cy} r={bin.r} fill={bin.color} fillOpacity={bin.opacity} stroke={borderOnHover && (tooltipData === null || tooltipData === void 0 ? void 0 : tooltipData.row) === bin.row && (tooltipData === null || tooltipData === void 0 ? void 0 : tooltipData.column) === bin.column ? 'black' : 'none'} strokeWidth={borderOnHover ? 2 : 0} onMouseEnter={() => hover && setTooltipData({ row: bin.row, column: bin.column })} onMouseLeave={() => hover && setTooltipData(null)} onClick={() => {
                    if (!events)
                        return;
                    alert(JSON.stringify({ row: bin.row, column: bin.column, bin: bin.bin }));
                }}/>)))}
          </HeatmapCircle>) : (<HeatmapRect data={binData} xScale={(d) => { var _a; return (_a = xScale(d)) !== null && _a !== void 0 ? _a : 0; }} yScale={(d) => { var _a; return (_a = yScale(d)) !== null && _a !== void 0 ? _a : 0; }} colorScale={rectColorScale} opacityScale={opacityScale} binWidth={binWidth} binHeight={binWidth} gap={2}>
            {(heatmap) => heatmap.map((heatmapBins) => heatmapBins.map((bin) => (<rect key={`heatmap-rect-${bin.row}-${bin.column}`} className="visx-heatmap-rect" width={bin.width} height={bin.height} x={bin.x} y={bin.y} fill={bin.color} fillOpacity={bin.opacity} stroke={borderOnHover && (tooltipData === null || tooltipData === void 0 ? void 0 : tooltipData.row) === bin.row && (tooltipData === null || tooltipData === void 0 ? void 0 : tooltipData.column) === bin.column ? 'black' : 'none'} strokeWidth={borderOnHover ? 2 : 0} onMouseEnter={() => hover && setTooltipData({ row: bin.row, column: bin.column })} onMouseLeave={() => hover && setTooltipData(null)} onClick={() => {
                    if (!events)
                        return;
                    alert(JSON.stringify({ row: bin.row, column: bin.column, bin: bin.bin }));
                }}/>)))}
          </HeatmapRect>)}
      </Group>
    </svg>);
}
export default Heatmap;
//# sourceMappingURL=Heatmap.jsx.map