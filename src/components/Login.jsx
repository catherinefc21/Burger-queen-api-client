import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook de navegación

  const handleLogin = async () => {
      try {
      const loginData = {
        email: email,
        password: password,
      };
   const response = await axios.post("http://localhost:8080/login", loginData);

      if (response.status === 200) {
       // const accessToken = response.data.accessToken;
       // console.log("Inicio de sesión exitoso. Token:", accessToken);
        // ** Crear constante cuando arreglemos la api = const userRole = response.data.user.role; 
        // Verificar el rol y redirigir
        if (response.data.user.role === "admin") {
          navigate("/Products"); // Redirección para el administrador
        } else if (response.data.user.rol === "Waiter") {
          navigate("/Orders"); // Redirección para el mesero
        } else {
          navigate("/Chef"); // Redirección para chef
        }
      } else {
        //console.error("Credenciales incorrectas");
      }
    } catch (error) {
      if (email === '' || password === '') {
        setError('¡Todos los campos son obligatorios!');
      } else {
        setError('¡Los datos ingresados son incorrectos!');
        //console.error('Error:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await handleLogin();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container">
    <section className="section-container">
      <form 
      className='login' onSubmit={handleSubmit}>
      <div className="logo1"></div>
        <input className="inputEmail"
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input className="inputPassword"
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
         {error && <b><p className='errorMessage'>{error}</p></b>}
    
        <button className="buttonColor">Iniciar sesión</button>
      </form>
    </section>
    </div>
  );
}
export default Login; 