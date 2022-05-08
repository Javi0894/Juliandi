import { useMediaQuery } from 'react-responsive';
import DesktopApp from './desktop';
import MobileApp from './mobile';
import './App.css';

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 600px)'
  });

  return (
    <>
      { isDesktop?<DesktopApp/>:<MobileApp/>}
    </>
    
  );
}

export default App;
