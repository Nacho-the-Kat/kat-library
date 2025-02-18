import React from "react";
import Table from "@/components/Table";
import { ColumnDef } from "@tanstack/react-table";

type StockData = {
  id: number;
  ticker: string;
  price: string;
  marketCap: string;
  volume: string;
};

const columns: ColumnDef<StockData>[] = [
  { accessorKey: "id", header: "#" },
  { accessorKey: "ticker", header: "Ticker" },
  { accessorKey: "price", header: "Price (USD)" },
  { accessorKey: "marketCap", header: "Market Cap" },
  { accessorKey: "volume", header: "Volume (24h)" },
];

const data: StockData[] = [
  { id: 1, ticker: "AAPL", price: "$150", marketCap: "$2T", volume: "$100M" },
  { id: 2, ticker: "TSLA", price: "$700", marketCap: "$900B", volume: "$50M" },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Market Table</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}
