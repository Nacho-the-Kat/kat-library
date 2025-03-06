import React from "react";
import { ColumnDef } from "@tanstack/react-table";
interface TableProps<T extends object> {
    columns: ColumnDef<T, unknown>[];
    data: T[];
    summaryText?: string;
    subText?: string;
}
declare const Table: <T extends object>({ columns, data, summaryText, subText }: TableProps<T>) => React.JSX.Element;
export default Table;
