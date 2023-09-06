import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Auth/Login.jsx";
import Orders from "./components/pages/Waiter/Orders.jsx";
import NewOrders from "./components/pages/Waiter/NewOrders.jsx";
import Kitchen from "./components/pages/Kitchen/kitchen.jsx";
import Admin from "./components/pages/Admin/Admin.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/NewOrders/' element={<NewOrders />}></Route>
        <Route path='/Orders/' element={<Orders />}></Route>
        <Route path='/Kitchen/' element={<Kitchen />}></Route>
        <Route path='/Admin/' element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
