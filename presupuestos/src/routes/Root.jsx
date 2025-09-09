import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { api } from "../utils/authUtils";
import Login from "../auth/Login";
import App from "../App";
import Loading from "../components/Loading";
import Header from "../layout/Header";
import Register from "../components/Register";
import AppLayout from "../layout/AppLayout";
import HomeMenu from "../layout/HomeMenu";
import ListClients from "../clients/ListClients";
import NewClient from "../clients/NewClient";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return <Loading />;

  return (
    <Routes>
        <Route             
          path="/"
          element={user 
            ? <AppLayout /> 
            : <Navigate to="/login" replace />}>

          <Route index element={<HomeMenu />} />
          <Route path="new-budget" element={<App />} />
          <Route path="clients" element={<ListClients />}/>
          <Route path="new-client" element={<NewClient />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<><Header /><Register /></>} />
    </Routes>
  );
};

export default Root;
