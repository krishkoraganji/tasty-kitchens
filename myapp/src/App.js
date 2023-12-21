import Login from './components/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/components/home'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
