import { useLoginInside } from "../../../logic/login";
import "./login.css";

const Login = () => {
  const {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLoginInside();

  return (
    <div className='container'>
      <section className='section-container'>
        <form className='login' onSubmit={handleLogin}>
          <div className='logo1'></div>
          <input
            className='inputEmail'
            type='text'
            name='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
          />
          <input
            className='inputPassword'
            type='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Contraseña'
          />
          {error && (
            <b>
              <p className='errorMessage'>{error}</p>
            </b>
          )}
          <button className='buttonColor' type='submit'>
            INGRESAR
          </button>
        </form>
      </section>
    </div>
  );
};
export default Login;
