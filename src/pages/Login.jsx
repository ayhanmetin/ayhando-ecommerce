import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import './Login.css'; // Importing the CSS file

function Login() {
  const { handleLogin } = useContext(SiteContext);

  return (
    <div className="login-container">
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}

export default Login;
