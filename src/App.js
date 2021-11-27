import { BrowserRouter,Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Opiniones from './components/Opiniones/Opiniones';
import Promos from './components/Promos/Promos';
import Reservas from './components/Reservas/Reservas';

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
