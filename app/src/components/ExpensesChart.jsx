import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01/04", value: 90 },
  { day: "05/04", value: 40 },
  { day: "13/04", value: 280 },
  { day: "26/04", value: 10 },
  { day: "01/04", value: 90 },
  { day: "05/04", value: 40 },
  { day: "13/04", value: 580 },
  { day: "26/04", value: 10 },
];

const ExpensesChart = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-8 mb-25">
      <div className="w-full h-100 rounded-xl">
        <h2 className="text-3xl pl-7 mb-8">Gastos por Dia</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="day" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#12161D",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="value" fill="#22c55e" radius={[15, 15, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensesChart;
