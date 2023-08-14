import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./css/AdminStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarList from './componets/user/NavbarList';
// customer import modules
import Layout from './componets/user/Layout';
// Admin import modules
import AdminLogin from './componets/admin/AdminLogin';
// import AdminLayout from "./AdminLayout";

// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import "datatables.net-dt/js/dataTables.dataTables.min.js";
import AdminDashboard from './componets/admin/AdminDashboard';
import reportWebVitals from './reportWebVitals';
import AdminAddMenu from './componets/admin/AdminAddMenu';
import AdminContact from './componets/admin/AdminContact';
import AdminManageMenu from './componets/admin/AdminManageMenu';
import AdminTablebooking from './componets/admin/Admintablebooking';
import DeleteAdminManageMenu from './componets/admin/DeleteAdminManageMenu';
import UpdateAdminManageMenu from './componets/admin/UpdateAdminManageMenu';
import Placeorder from './componets/user/Placeorder';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      {/* customer routing here */}
      <Route path="/" element={<NavbarList />}>
        <Route index element={<Layout />} />
        {/* <Route path='/add-cart/:id' element={<Cartdetails />} /> */}
        

      </Route>

      <Route path='/add-cart/:id' element={<Placeorder />} />
      {/* Admin routing here */}
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route path='/admin-login/admin-dashboard' element={<AdminDashboard />} />
      <Route path='/admin-login/admin-addmenu' element={<AdminAddMenu />} />
      <Route path='/admin-login/admin-managemenu' element={<AdminManageMenu />} />
      <Route path='/admin-login/admin-tablebooking' element={<AdminTablebooking />} />
      <Route path='/admin-login/admin-contact' element={<AdminContact />} />
      <Route path='/admin-login/update-admin-managemenu/:id' element={<UpdateAdminManageMenu />} />
      <Route path='/admin-login/delete-admin-managemenu/:id' element={<DeleteAdminManageMenu />} />
      


    </Routes>

  </BrowserRouter>
);
reportWebVitals();
