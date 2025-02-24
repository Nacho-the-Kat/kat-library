import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReactTable, getCoreRowModel, flexRender, } from "@tanstack/react-table";
const Table = ({ columns, data, summaryText, subText }) => {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });
    return (_jsxs("div", { className: "overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm", children: [(summaryText || subText) && (_jsxs("div", { className: "p-4 bg-gray-900 border-b border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 font-medium", children: [summaryText && _jsx("p", { children: summaryText }), subText && _jsx("p", { children: subText })] })), _jsxs("table", { className: `min-w-full border-collapse ${summaryText || subText ? '' : 'border-t border-gray-200 dark:border-gray-700'}`, children: [_jsx("thead", { className: "bg-gray-900 text-white text-sm text-left", children: table.getHeaderGroups().map((headerGroup) => (_jsx("tr", { children: headerGroup.headers.map((header) => (_jsx("th", { className: "px-4 py-2 border-b border-gray-700 text-white", children: flexRender(header.column.columnDef.header, header.getContext()) }, header.id))) }, headerGroup.id))) }), _jsx("tbody", { children: table.getRowModel().rows.map((row) => (_jsx("tr", { className: "bg-gray-800 hover:bg-gray-900 transition", children: row.getVisibleCells().map((cell) => (_jsx("td", { className: "px-4 py-2 border-b border-gray-700 text-white text-xs", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id))) })] })] }));
};
export default Table;
//# sourceMappingURL=Table.js.map