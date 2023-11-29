import { useEffect, useState, useContext } from 'react';
import NavBar from './components/NavBar';
import SiteRoutes from './SiteRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiteContext } from './context/SiteContext';
import Footer from './components/Footer';

function App() {
  const { user, handleLogin, handleLogout } = useContext(SiteContext);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
