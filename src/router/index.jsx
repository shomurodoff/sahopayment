import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, DashboardLayout, HomeLayout } from "../layouts";
import { HomePage } from "../modules/home/pages";
import {
  ConfirmPage,
  ForgotPage,
  LoginPage,
  RegisterPage,
} from "../modules/auth/pages";
import IsAuth from "../services/auth/IsAuth";
import IsGuest from "../services/auth/IsGuest";
import { ListPage } from "../modules/dashboard/wallets/pages";
import { ProfilePage } from "../modules/dashboard/pages";

const Index = () => {
  return (
    <BrowserRouter>
      <IsAuth>
        <Routes>
          <Route path={"/"} element={<DashboardLayout />}>
            <Route index element={<ListPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path={"*"} element={<Navigate to={"/"} />} />
          </Route>
        </Routes>
      </IsAuth>
      <IsGuest>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<RegisterPage />} />
            <Route path="/auth/verify" element={<ConfirmPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/reset-password" element={<ForgotPage />} />
          </Route>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </IsGuest>
    </BrowserRouter>
  );
};

export default Index;
