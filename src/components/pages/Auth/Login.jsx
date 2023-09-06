import { useLoginInside } from "./Login";
import LoginForm from "./LoginForm.jsx";
import Logo from "../../Logo/Logo.jsx";
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
        <Logo />
        <LoginForm
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          error={error}
          handleLogin={handleLogin}
        />
      </section>
    </div>
  );
};

export default Login;
