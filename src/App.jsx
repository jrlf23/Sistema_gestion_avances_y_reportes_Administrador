import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header_administrator from './Componente_comun/Header_administator';
import { Login_administrator } from './Login_administrator/Administrator_login';
import { Registration_administrator } from './Registration_administrator/Administrator_registration';
import Approve_reports from './Approve_reports/Approve_reports';

const AdministratorLayout=()=>
(
  <>
  <Header_administrator/>
  <Outlet/>
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas para empleados con Header_administrator */}
        <Route element={<AdministratorLayout />}>
          <Route path="/" element={<Registration_administrator/>} />
          <Route path="/Login_administrator" element={<Login_administrator />} />
          <Route path="/Approve_reports" element={<Approve_reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
