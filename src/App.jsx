import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/vistas/login/Login.jsx";
import Orders from "./components/vistas/waiters/Orders.jsx";
import Products from "./components/vistas/admin/Products.jsx";
import "./App.css";
import Chef from "./components/vistas/chef/Chef.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Orders/' element={<Orders />}></Route>
        <Route path='/Products/' element={<Products />}></Route>
        <Route path='/Chef/' element={<Chef />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
