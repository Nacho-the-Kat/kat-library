import React from "react";
import { useReactTable, getCoreRowModel, flexRender, } from "@tanstack/react-table";
const Table = ({ columns, data, summaryText, subText }) => {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });
    return (<div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
      {(summaryText || subText) && (<div className="p-4 bg-gray-900 border-b border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 font-medium">
          {summaryText && <p>{summaryText}</p>}
          {subText && <p>{subText}</p>}
        </div>)}
      <table className={`min-w-full border-collapse ${summaryText || subText ? '' : 'border-t border-gray-200 dark:border-gray-700'}`}>
        <thead className="bg-gray-900 text-white text-sm text-left">
          {table.getHeaderGroups().map((headerGroup) => (<tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (<th key={header.id} className="px-4 py-2 border-b border-gray-700 text-white">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>))}
            </tr>))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (<tr key={row.id} className="bg-gray-800 hover:bg-gray-900 transition">
              {row.getVisibleCells().map((cell) => (<td key={cell.id} className="px-4 py-2 border-b border-gray-700 text-white text-xs">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>))}
            </tr>))}
        </tbody>
      </table>
    </div>);
};
export default Table;
//# sourceMappingURL=Table.jsx.map