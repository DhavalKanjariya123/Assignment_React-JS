import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Updateproduct from "./components/Updateproduct";
import Deleteproduct from "./components/Deleteproduct";
import EditAddmodal from "./components/Editproduct";
import EditAddproduct from "./components/Editproduct";





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Updateproduct />} />
          <Route path="/delete-product/:id" element={<Deleteproduct />}/>
          <Route path="/edit-product/:id" element={<EditAddproduct />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};
export default App;

