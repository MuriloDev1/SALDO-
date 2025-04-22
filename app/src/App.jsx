import "./App.css";
import BalanceCard from "./components/BalanceCard";
import Sidebar from "./components/SideBar";
import ExpensesChart from "./components/ExpensesChart";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="container mx-auto min-h-screen flex-1 my-10 text-white">
          <BalanceCard />
          <ExpensesChart />
          <Transactions />
        </main>
      </div>
    </>
  );
}

export default App;
