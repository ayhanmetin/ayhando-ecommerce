import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const [user, SetUser] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    SetUser(JSON.parse(localStorage.getItem('user')) ?? null);
  }, []);

  const handleLogin = () => {
    const user = {
      id: 1,
      name: 'Ayhan',
    };
    SetUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    SetUser(null);
  };

  return (
    <SiteContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </SiteContext.Provider>
  );
}

export { SiteContext, SiteContextProvider };
