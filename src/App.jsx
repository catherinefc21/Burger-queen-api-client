import { BrowserRouter, Route ,Routes  } from 'react-router-dom'
import { Login } from './components/login';
import { Orders } from './components/Orders'
import Products from './components/Products'
import './App.css'
import { Chef } from './components/Chef';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Login /> }></Route>
      <Route path='/Orders/' element = {<Orders />}></Route>
      <Route path='/Products/' element = {<Products />}></Route>
      <Route path='/Chef/' element = {<Chef />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
