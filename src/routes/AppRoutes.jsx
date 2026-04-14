import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainLayout from '../components/Layout/MainLayout';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;