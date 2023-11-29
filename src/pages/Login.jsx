import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';

function Login() {
  const { handleLogin } = useContext(SiteContext);
  return (
    <>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </>
  );
}

export default Login;

