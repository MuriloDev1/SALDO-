import React, { useState } from "react";
import { CircleDollarSign } from "lucide-react";

const EditableBalance = () => {
  const [saldo, setSaldo] = useState(1200);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <p className="text-4xl mb-8">Saldo Atual</p>
      <p className="text-3xl font-bold text-green-500 mt-2">R$ {saldo}</p>
      <div className="relative w-full max-w-xs mt-4">
        <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none">
          <CircleDollarSign className="text-gray-400" />
        </div>
        <input
          type="number"
          style={{ appearance: "textfield", MozAppearance: "textfield" }}
          className="no-spinner w-full pl-7 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          placeholder="Digite novo saldo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSaldo(Number(inputValue));
                setInputValue("");
              }
            }}
        />
      </div>
    </div>
  );
};

export default EditableBalance;
