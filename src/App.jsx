import { BrowserRouter, Route ,Routes  } from 'react-router-dom'
import { Login } from './components/login';
import { Orders } from './components/Orders'
import Products from './components/Products'
import './App.css'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Login></Login> }></Route>
      <Route path='/Orders/' element = {<Orders></Orders>}></Route>
      <Route path='/Products/' element = {<Products></Products>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
