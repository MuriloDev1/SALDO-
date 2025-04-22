import {
  LayoutDashboard,
  ArrowUpDown,
  Target,
  CreditCard,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-80 bg-gray-800 text-white p-6 hidden md:block">
      <section className="flex items-center py-6 pl-4 pb-8 my-6 border-b-3 border-gray-700">
        <img
          src="/user.jpg"
          className="w-16 h-16 rounded-full"
          alt="User-Foto"
        />
        <div className="pl-3">
          <p className="flex text-white text-3xl font-semibold gap-2">
            User <ChevronDown className="text-green-500 mt-2" />
          </p>
          <p className="text-2sm text-gray-400">Personal Account</p>
        </div>
      </section>

      <nav className="flex flex-col space-y-2">
        <a href="#" className="text-xl flex hover:bg-gray-700 p-2 gap-2 rounded">
          <LayoutDashboard className="text-gray-400 w-10" />
          Dashboard
        </a>
        <a href="#" className="text-xl flex hover:bg-gray-700 p-2 gap-2 rounded">
          <ArrowUpDown className="text-gray-400 w-10" />
          Transações
        </a>
        <a href="#" className="text-xl flex hover:bg-gray-700 p-2 gap-2 rounded">
          <Target className="text-gray-400 w-10" />
          Metas
        </a>
        <a href="#" className="text-xl flex hover:bg-gray-700 p-2 gap-2 rounded">
          <CreditCard className="text-gray-400 w-10" />
          Cartões
        </a>
        <a href="#" className="text-xl flex hover:bg-gray-700 p-2 gap-2 rounded">
          <Settings className="text-gray-400 w-10" />
          Configurações
        </a>
      </nav>
    </aside>
  );
}
