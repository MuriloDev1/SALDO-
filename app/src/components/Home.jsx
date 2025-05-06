import React from "react";
// * Componentes
import BalanceCard from "./BalanceCard";
import Sidebar from "./SideBar";
import ExpensesChart from "./ExpensesChart";
import Transactions from "./Transactions";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="container mx-auto min-h-screen flex-1 my-10 text-white">
        <BalanceCard />
        <ExpensesChart />
        <Transactions />
      </main>
    </div>
  );
};

export default Home;
