import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './functions/functions.js'
import axios from './api/axios.js';
import "./login.css";

 
const LOGIN_URL = '/auth';

export const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
 

  return (
    <div className="container">
    <section className="section-container">
      <form 
      className='login'
      onSubmit={handleSubmit}>
      <div className="logo1"></div>
        <h1>login</h1>
        <input
          type='text'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Iniciar sesión</button>
        {error && <p>Todos los campos son obligatorios</p>}
      </form>
    </section>
    </div>
  );
}
export default Login; 