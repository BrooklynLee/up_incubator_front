import React from "react";
import { Header } from "../components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features } from "../pages/client/features";
import { Feature } from "../pages/client/feature";
import { Search } from "../pages/client/search";
import { NotFound } from "../pages/404";
import { Login } from "../pages/login";

const ClientRoutes = [<Route key={1} path="/" element={<Login />} />];

export const LoggedOutRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>{ClientRoutes}</Routes>
      </BrowserRouter>
    </div>
  );
};
