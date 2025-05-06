import React from "react";
// * Rotas
import { Route, Routes } from "react-router-dom";
// * Componentes
import Home from "../components/Home";
// import PageCards from "../pages/Cards";
import PageChatbot from "../pages/Chatbot";
import PageDashboard from "../pages/Dashboard";
import PageGoals from "../pages/Goals";
import PageTransactions from "../pages/Transactions";
import Modal from "../components/Modal";

const AppRoutes = () => {
  return (
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Modal />} path="/modal" />
        <Route element={<PageChatbot />} path="/chatbot" />
        <Route element={<PageDashboard />} path="/dashboard" />
        <Route element={<PageGoals />} path="/goals" />
        <Route element={<PageTransactions />} path="/transactions" />
      </Routes>
  );
};

export default AppRoutes;
