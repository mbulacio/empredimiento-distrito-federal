import { BrowserRouter} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Opiniones from './components/Opiniones/Opiniones';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Reservas from './components/Reservas/Reservas';
import Promos from './components/Promos/Promos';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Opiniones/>
      <Menu/>
      <Reservas/>
      <Promos/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
