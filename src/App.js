// import { useMediaQuery } from 'react-responsive';
import { 
  BrowserRouter as Router,  
  Routes, Route, Navigate 
} from 'react-router-dom';

import React, { useState } from 'react';
import { LanguageContext } from './contexts';
// import DesktopApp from './desktop';
// import MobileApp from './mobile';
import './App.css';
import LoginRoute from './routes/LoginRoute';
import HomeRoute from './routes/HomeRoute';

function App() {
  const lanState = useState('GER');
  // const isDesktop = useMediaQuery({
  //   query: '(min-width: 600px)'
  // });

  return (
    <LanguageContext.Provider value={{ lanState }}>
      <Router>
        <Routes>
          <Route path='/' element={ <Navigate replace to={'/login'}/> }/>
          <Route path='/login' element={ <LoginRoute/> }/>
          <Route path='/home' element={ <HomeRoute/> }/>
          {/* { isDesktop?<DesktopApp/>:<MobileApp/>} */}
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
