import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';
import Opiniones from './components/Opiniones/Opiniones';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
         <Route exact path='/'>
            <Opiniones/>
         </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
