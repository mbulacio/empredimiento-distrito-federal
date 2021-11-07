import { BrowserRouter,Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
         
      </Switch>
    </BrowserRouter>
  );
}

export default App;
