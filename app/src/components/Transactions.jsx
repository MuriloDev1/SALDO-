import React from "react";
import { Plus } from "lucide-react";

const categorias = [
  "Alimentação",
  "Transporte",
  "Moradia",
  "Lazer",
  "Saúde",
  "Educação",
  "Compras",
  "Salario",
  "Freelancer",
  "Investimentos",
  "Outros",
];

const data = [
  {
    id: 1,
    title: "Casa",
    value: 1000,
    category: "Moradia",
    type: "Saida",
    date: "27-04-2025",
  },
  {
    id: 2,
    title: "Mercado",
    value: 100,
    category: "Alimentação",
    type: "Saida",
    date: "28-04-2025",
  },
  {
    id: 3,
    title: "Salario",
    value: 5000,
    category: "Salario",
    type: "Entrada",
    date: "27-04-2025",
  },
];

const Transactions = () => {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="flex gap-5 mx-5">
        <h2 className="text-3xl mb-4">Transações</h2>
        <button id="addTransactions" className="mb-4 bg-[#28C76F] rounded-full p-2 text-white cursor-pointer hover:opacity-50 transition">
          <Plus />
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full text-sm text-gray-300 bg-[#1a1d23] border border-gray-700 text-center">
          <thead className="bg-[#12161D] text-gray-400 border-b border-gray-700">
            <tr>
              <th className="text-xl text-white px-4 py-3">Nome</th>
              <th className="text-xl text-white px-4 py-3">Data</th>
              <th className="text-xl text-white px-4 py-3">Categoria</th>
              <th className="text-xl text-white px-4 py-3">Quantia</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4">Home</td>
              <td className="px-6 py-4">06/Aug</td>
              <td className="px-6 py-4">Housing</td>
              <td className="px-6 py-4 text-green-500 font-medium">R$ 1,300</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4">Salary</td>
              <td className="px-6 py-4">02/Aug</td>
              <td className="px-6 py-4">Income</td>
              <td className="px-6 py-4 text-green-500 font-medium">R$ 1,500</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Groceries</td>
              <td className="px-6 py-4">30/July</td>
              <td className="px-6 py-4">Food</td>
              <td className="px-6 py-4 text-green-500 font-medium">R$ 300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Transactions;
