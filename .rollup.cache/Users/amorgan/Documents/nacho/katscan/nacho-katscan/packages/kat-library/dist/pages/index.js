import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from "@/components/Table";
const columns = [
    { accessorKey: "id", header: "#" },
    { accessorKey: "ticker", header: "Ticker" },
    { accessorKey: "price", header: "Price (USD)" },
    { accessorKey: "marketCap", header: "Market Cap" },
    { accessorKey: "volume", header: "Volume (24h)" },
];
const data = [
    { id: 1, ticker: "AAPL", price: "$150", marketCap: "$2T", volume: "$100M" },
    { id: 2, ticker: "TSLA", price: "$700", marketCap: "$900B", volume: "$50M" },
];
export default function Home() {
    return (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Stock Market Table" }), _jsx(Table, { columns: columns, data: data })] }));
}
//# sourceMappingURL=index.js.map