import React from "react";
import EditableBalance from "./EditableBalance";

const BalanceCard = () => {
  return (
    <div className="bg-gray-800 text-white border-3 border-gray-700 rounded-lg p-6 mx-auto flex justify-between items-end max-w-6xl">
      {/* Saldo atual */}
      <EditableBalance/>

      {/* Income */}
      <div className="bg-[#12161D] px-6 py-4 gap-4 rounded-lg text-xl flex">
        <span>Renda</span>
        <span className="text-green-500 font-semibold">R$ 5.000</span>
        <span>Gastos</span>
        <span className="text-red-700 font-semibold">R$ -2.000</span>
      </div>
    </div>
  );
};

export default BalanceCard;
