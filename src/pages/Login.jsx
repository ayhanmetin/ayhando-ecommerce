import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';

function Login() {
  const { handleLogin } = useContext(SiteContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        onClick={handleLogin}
        className="btn btn-primary"
        style={{
          fontSize: '1em',
          padding: '1em',
          borderRadius: '0.5em',
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
